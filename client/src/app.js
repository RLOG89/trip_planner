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

  var app = function() {

    var organizer = new Organizer();

    var tripForm = document.querySelector('#trip-form');
    tripForm.onsubmit = function(e) {
      e.preventDefault();
      // FIX LATER, NEED TO CALL A FUNCTION
      containerIndex.style.visibility = 'hidden';
      containerDestination.style.visibility = 'visible';
      containerItinerary.style.visibility = 'hidden';
      var tripData = {
        name: document.querySelector("#name").value,
        owner: document.querySelector('#owner').value,
        budget: parseFloat(document.querySelector('#budget').value),
        start_date: document.querySelector('#start-date').value,
        end_date: document.querySelector('#end-date').value,
        start_end_point: document.querySelector('#start-end-point').value
      };
      newTrip = new Trip(tripData);
      organizer.addTrip(newTrip);

      ajaxHelper.makePostRequest(url, tripData, function(id){
        console.log("data:", id);
        _id = id;
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
      console.log('working')
      containerIndex.style.visibility = 'visible';
      containerDestination.style.visibility = 'hidden';
      containerItinerary.style.visibility = 'hidden';
    }
    destinationButton.oncall = function() {
      console.log('working')

      containerIndex.style.visibility = 'hidden';
      containerDestination.style.visibility = 'visible';
      containerItinerary.style.visibility = 'hidden';
    }
    itineraryButton.onclick = function() {
      console.log('working')

      containerIndex.style.visibility = 'hidden';
      containerDestination.style.visibility = 'hidden';
      containerItinerary.style.visibility = 'visible';
    }

    var whiskyButton = document.getElementById('distilleries');
    var whiskyActive = false;
    whiskyButton.onclick = function() {
      if (whiskyActive) {
        whiskyActive = false;
        newMap.deleteMarkers();
        populateList(whisky,true);
      } else {
        whiskyActive = true;
        populateList(whisky);
      }
    };

    var sportsButton = document.getElementById('sports');
    var sportsActive = false;
    sportsButton.onclick = function() {
      if (sportsActive) {
        sportsActive = false;
        newMap.deleteMarkers();
        populateList(sports,true);
      } else {
        sportsActive = true;
        populateList(sports);
      }
    };

    var moviesButton = document.getElementById('movies');
    var moviesActive = false;
    moviesButton.onclick = function() {
      if (moviesActive) {
        newMap.deleteMarkers();
        moviesActive = false;
        populateList(movies,true);
      } else {
        moviesActive = true;
        populateList(movies);
      }
    };

    var historicButton = document.getElementById('historic');
    var historicActive = false;
    historicButton.onclick = function() {
      if (historicActive) {
        historicActive = false;
        newMap.deleteMarkers();
        populateList(historic,true);
      } else {
        historicActive = true;
        populateList(historic);
      }
    };

    var mapDiv = document.getElementById('main-map');
    var startCoords = ({lat: 56.4907, lng: -4.2026});
    var newMap = new MapWrapper(mapDiv, startCoords, 6);
    var populateList = function(categories, clear) {
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
        viewButton.addEventListener ("click", function() {
          var description = document.getElementById('description');
          var image = document.createElement('img');
          description.innerText =  item.name +', ' + item.location + '\n \n' + item.description + '\n \n';
          image.id = 'description-pictures'
          image.src = item.img;
          image.height = '100px';
          image.width = '100px';
          description.appendChild(image);
        });
        addButton.addEventListener ("click", function() {
          newTrip.addActivity(_id, item.name)
        })
        destination.innerText = item.name +', ' + item.location;
        list.appendChild(destination);
        list.appendChild(viewButton);
        list.appendChild(addButton);
        list.appendChild(spacer);
        itemCoords = {lat: item.lat, lng: item.lng};
        console.log(newMap);
        newMap.addMarker(itemCoords, item.img, item.description);
      })
    };
    var itineraryMapDiv = document.getElementById('itinerary-map');
    var itineraryMap = MapWrapper(itineraryMapDiv, startCoords, 6);

  var exampleItinerary = [{lat: 55.947149, lng: -3.170776, name: 'Edinburgh Town'}, {lat: 55.873876, lng: -4.252041, name: 'Glasgow Town'}];

  var itineraryMapDiv = document.getElementById('itinerary-map');
  var itineraryMap = new MapWrapper(itineraryMapDiv, startCoords, 6);

  var populateItineraryMap = function(map, itinerary) {
    for (destination of itinerary) {
      destinationCoords = {lat: destination.lat, lng: destination.lng};
      map.addItineraryMarker(destinationCoords, destination.name);
    }
  };

  populateItineraryMap(itineraryMap, exampleItinerary);

  var directionsService = new google.maps.DirectionsService();

  var tripWaypoints = [{location: 'Balvenie, Dufftown', stopover: true}, {location: 'Highland Park, Kirkwall', stopover: true}];
  

  var request = {
    origin: 'Emirates Arena, Glasgow',
    waypoints: tripWaypoints,
    optimizeWaypoints: true,
    destination: "Murrayfield, Edinburgh",
    travelMode: "DRIVING"
  };

  var directionsDisplay = new google.maps.DirectionsRenderer();

  directionsDisplay.setMap(itineraryMap.map);

  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
      console.log(response)
      var route = response.routes[0];
      var routeDescription = document.getElementById('route-description');
      routeDescription.innerHTML = '';
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        routeDescription.innerHTML += 'Day ' + routeSegment + '<br>';
        routeDescription.innerHTML += route.legs[i].start_address + ' to ';
        routeDescription.innerHTML += route.legs[i].end_address + '<br>';
        routeDescription.innerHTML += route.legs[i].distance.text + '<br><br>'
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

  window.onload = app;