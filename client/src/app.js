var whisky = require('../api/whisky.js');
var sports = require('../api/sports.js');
var movies = require('../api/movies.js');
var historic = require('../api/historic.js');
var MapWrapper = require('./views/mapWrapper.js');

var app = function() {

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
  destinationButton.onclick = function() {
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
};

window.onload = app;