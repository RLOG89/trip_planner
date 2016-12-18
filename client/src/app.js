var whisky = require('../api/whisky.js');
var sports = require('../api/sports.js');
var movies = require('../api/movies.js');
var historic = require('../api/historic.js');
var MapWrapper = require('./views/mapWrapper.js');
// var DbHelper = require('./helper/dbHelper.js');
var Organizer = require('./organizer/organizer.js');
var Trip = require('./organizer/trip.js');
var url = "http://localhost:3000/trips"

var app = function() {
//WORKS BUT WONT LOAD SECOND PAGE
  // var organizer = new Organizer();

  // var tripForm = document.querySelector('#trip-form');
  // tripForm.onsubmit = function(e) {
  //   e.preventDefault();
  //   location.href = "http://localhost:3000/destinations.html"
  //   var tripData = {
  //     name: document.querySelector("#name").value,
  //     owner: document.querySelector('#owner').value,
  //     budget: parseFloat(document.querySelector('#budget').value),
  //     start_date: document.querySelector('#start-date').value,
  //     end_date: document.querySelector('#end-date').value,
  //     start_end_point: document.querySelector('#start-end-point').value
  //   };
  //   console.log(tripData)
  //   var newTrip = new Trip(tripData);
  //   console.log(newTrip)
  //   organizer.addTrip(newTrip);

    // var request = new XMLHttpRequest();
    // request.open("POST", url);
    // request.setRequestHeader("Content-Type", "application/json");
    // request.onload = function() {
    //   if(request.status === 200) {
    //   }
    // };
    // request.send(JSON.stringify(tripData));

  // };



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
  // var itineraryMapDiv = document.getElementById('itinerary-map');
  var startCoords = ({lat: 56.4907, lng: -4.2026});
  var newMap = new MapWrapper(mapDiv, startCoords, 6);
  // var itineraryMap = new MapWrapper(itineraryMapDiv, startCoords, 6);

  var fetchAccount = function() {
    var url = "http://localhost:3000/trips/5856bd3a44e40b7a2b03c3eb"
    request.open("GET", url);
        request.onload = function() {
          if(request.status === 200) {
          }
        };
        console.log('hello')
        // request.send()
  }

  var trip = new Trip({
    name: "Trip of Life",
    owner: "Max Loggie",
    budget: 150,
    start_date: "2016-12-22",
    end_date: "2016-12-23",
    start_end_point: "Edinburgh",
    duration: 0,
    activities: [],
    number_of_activities: 0
  });

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
        console.log(item.name)
        trip.addActivity(item.name)
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
};

window.onload = app;