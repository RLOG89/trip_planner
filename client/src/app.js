var whisky = require('../api/whisky.js');
var sports = require('../api/sports.js');
var movies = require('../api/movies.js');
var historic = require('../api/historic.js');
var MapWrapper = require('./views/mapWrapper.js');
var Organizer = require('./organizer/organizer.js');
var Trip = require('./organizer/trip.js');
var ajaxHelper = require('./helper/ajaxHelper.js');
var url = "http://localhost:3000/trips";
var _id = "";
// var thisid = "";

var app = function() {

  var login = document.querySelector('#login');
  login.onsubmit = function(e) {

    var username = document.getElementById("login-user-name").value
    var password = document.getElementById("login-password").value
    e.preventDefault();

    ajaxHelper.makeGetRequest("http://localhost:3000/trips?user_name=" + username, function(data) {
      var userExists = JSON.parse(data)
      console.log(userExists)
      if(userExists.length >= 1) {
        containerIndex.style.visibility = 'hidden';
        containerDestination.style.visibility = 'hidden';
        containerItinerary.style.visibility = 'visible';
      } else {
        alert('You have not registered.  Please sign up above.')
      }
    })
  }

// slide show of pictures on front page
var slideIndex = 0;
carousel();

function carousel() {
    var slide = document.getElementsByClassName("slide");
    for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex = 1} 
    slide[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); 
}

  var organizer = new Organizer();

  var tripForm = document.querySelector('#trip-form');
  tripForm.onsubmit = function(e) {
    e.preventDefault();
      // FIX LATER, NEED TO CALL A FUNCTION
      containerIndex.style.visibility = 'hidden';
      containerDestination.style.visibility = 'visible';
      containerItinerary.style.visibility = 'hidden';
      var tripData = {
        user_name: document.querySelector('#user-name').value,
        password: document.querySelector('#password').value,
        name: document.querySelector("#name").value,
        owner: document.querySelector('#owner').value,
        budget: parseFloat(document.querySelector('#budget').value),
        start_date: document.querySelector('#start-date').value,
        end_date: document.querySelector('#end-date').value,
        start_end_point: document.querySelector('#start-end-point').value
      };
      console.log(tripData)
      newTrip = new Trip(tripData);
      organizer.addTrip(newTrip);

      ajaxHelper.makePostRequest(url, tripData, function(id){
        console.log("i am being called")
        _id = id;
        // thisid = "http://localhost:3000/trips/" + id.replace(/"/g, '') 
        // ajaxHelper.makeGetRequest("http://localhost:3000/trips/" + id.replace(/"/g, '') + "/edit", tripData, cb);
      })

    };

    var containerIndex = document.getElementById('container-index');
    var containerDestination = document.getElementById('container-destination');
    var containerItinerary = document.getElementById('container-itinerary') 
    var indexButton = document.getElementById('index-button');
    var destinationButton = document.getElementById('destination-button')
    var itineraryButton = document.getElementById('itinerary-button')
    indexButton.onclick = function() {
      containerIndex.style.visibility = 'visible';
      containerDestination.style.visibility = 'hidden';
      containerItinerary.style.visibility = 'hidden';
    }
    destinationButton.onclick = function() {
      containerIndex.style.visibility = 'hidden';
      containerDestination.style.visibility = 'visible';
      containerItinerary.style.visibility = 'hidden';
    }
    itineraryButton.onclick = function() {
      console.log('working')
      populateItinerary();
      containerIndex.style.visibility = 'hidden';
      containerDestination.style.visibility = 'hidden';
      containerItinerary.style.visibility = 'visible';
    }

    var whiskyButton = document.getElementById('distilleries');
    var whiskyActive = false;
    var iconDistillery = "images/distillery.png";
    whiskyButton.onclick = function() {
      if (whiskyActive) {
        whiskyActive = false;
        newMap.deleteMarkers();
        populateList(whisky,true,iconDistillery);
      } else {
        whiskyActive = true;
        populateList(whisky,false,iconDistillery);
      }
    };

    var sportsButton = document.getElementById('sports');
    var sportsActive = false;
    var iconSport = "images/sport.png";
    sportsButton.onclick = function() {
      if (sportsActive) {
        sportsActive = false;
        newMap.deleteMarkers();
        populateList(sports,true,iconSport);
      } else {
        sportsActive = true;
        populateList(sports,false,iconSport);
      }
    };

    var moviesButton = document.getElementById('movies');
    var moviesActive = false;
    var iconMovie = "images/movie.png";
    moviesButton.onclick = function() {
      if (moviesActive) {
        newMap.deleteMarkers();
        moviesActive = false;
        populateList(movies,true,iconMovie);
      } else {
        moviesActive = true;
        populateList(movies,false,iconMovie);
      }
    };

    var historicButton = document.getElementById('historic');
    var historicActive = false;
    var iconCastle = "images/castle.png";
    historicButton.onclick = function() {
      if (historicActive) {
        historicActive = false;
        newMap.deleteMarkers();
        populateList(historic,true,iconCastle);
      } else {
        historicActive = true;
        populateList(historic,false,iconCastle);
      }
    };

    var mapDiv = document.getElementById('main-map');
    var startCoords = ({lat: 56.4907, lng: -4.2026});
    var newMap = new MapWrapper(mapDiv, startCoords, 6);
    var populateList = function(categories, clear,iconImage) {
      var list = document.getElementById('list');
      list.innerHTML = "";

      if (clear) return;

      newMap.deleteMarkers();


      categories.forEach(function(item) {
        var spacer = document.createElement('p');
        var destination = document.createElement('li');
        var viewButton = document.createElement('button');
        var addButton = document.createElement('button');
        viewButton.innerHTML = 'view';
        addButton.innerHTML = 'add to trip';
        addButton.id = 'add-button';
        console.log(addButton.value)
        viewButton.addEventListener ("click", function() {
          var description = document.getElementById('description');
          var image = document.createElement('img');
          description.innerText =  item.name +', ' + item.location + '\n \n' + item.description + '\n \n';
          image.id = 'description-pictures'
          image.src = item.img;
          image.height = '100px';
          image.width = '100px';
          description.appendChild(image);
          newMap.clearMarkers();
          newMap.addMarker({lat: item.lat, lng: item.lng}, item.name, item.cost, item.duration, iconImage);
        });
        addButton.addEventListener ("click", function() {
          if (this.innerHTML === "add to trip") {
            this.innerHTML = "remove from trip"
            newTrip.addActivity(_id, item)
          } else {
            this.innerHTML = "add to trip"
            newTrip.removeActivity(_id, item)
          }
        })
        destination.innerText = item.name +', ' + item.location;
        list.appendChild(destination);
        list.appendChild(viewButton);
        list.appendChild(addButton);
        list.appendChild(spacer);
        itemCoords = {lat: item.lat, lng: item.lng};
        // console.log(newMap);
        newMap.addMarker(itemCoords, item.name, item.cost, item.duration, iconImage);
      })
    };

    var itineraryMapDiv = document.getElementById('itinerary-map');
    var itineraryMap = new MapWrapper(itineraryMapDiv, startCoords, 6);
    var directionsService = new google.maps.DirectionsService();
    var tripWaypoints = [];

    var itineraryMapMarkers = function(map, trip) {
     for (destination of trip.activities) {
       destinationCoords = {lat: destination.lat, lng: destination.lng};
       map.addItineraryMarker(destinationCoords, destination.name);
     }
   };

   var addWayPoints = function(trip) {
    for (destination of trip.activities) {
      destinationCoords = {lat: destination.lat, lng: destination.lng};
      tripWaypoints.push({location: new google.maps.LatLng(destination.lat,destination.lng), stopover: true});
    }
  };

  var addTripDetailsToItineraryList = function(trip) {
    var routeDescription = document.getElementById('route-description');
    for (destination of trip.activities) {
      routeDescription.innerHTML = '<b>Trip name:</b> ' + trip.name + '<br><b>Remaining budget:</b> £' + trip.budget + '<b><br>Cost:</b> £' + trip.cost + '<br><b>Start date: </b>' + trip.start_date + '<br><b>End date: </b>' + trip.end_date + '<br><br>\n<br>';
    }
  };

  var populateItinerary = function() {
   var url = "http://localhost:3000/trips/" + _id.replace(/"/g, '');
   ajaxHelper.makeGetRequest(url, function(text) { 
     var trip = JSON.parse(text);
     showRoute(itineraryMap, trip);
     itineraryMapMarkers(itineraryMap, trip);
   })    
 };

 var showRoute = function(map, trip) {
  addWayPoints(trip);
  addTripDetailsToItineraryList(trip);
  var request = {
   origin: trip.start_end_point,
   waypoints: tripWaypoints,
   optimizeWaypoints: true,
   destination: trip.start_end_point,
   travelMode: "DRIVING"
 };

 var directionsDisplay = new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:"#856367",strokeWeight:5}, suppressMarkers:true});
 directionsDisplay.setMap(itineraryMap.map);
 directionsService.route(request, function(response, status) {
   if (status == 'OK') {
     directionsDisplay.setDirections(response);
     var route = response.routes[0];
     console.log('trip', trip);
     var routeDescription = document.getElementById('route-description'); 
     for (var i = 0; i < route.legs.length; i++) {
       var routeSegment = i + 1;
       routeDescription.innerHTML += 'Part ' + routeSegment + '<br>';
       routeDescription.innerHTML += route.legs[i].start_address + ' to ';
       routeDescription.innerHTML += route.legs[i].end_address + '<br>';
       routeDescription.innerHTML += route.legs[i].distance.text + '<br><br>'
     }
   } else {
     window.alert('Directions request failed due to ' + status);
   }
 });
}
}

window.onload = app;