var whisky = require('../api/whisky.js');
var sports = require('../api/sports.js');
var movies = require('../api/movies.js');
var historic = require('../api/historic.js');
var MapWrapper = require('./views/mapWrapper.js');

var app = function() {

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

      var destination = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = item.name;
      checkbox.value = false;
      checkbox.id = item.name;

      destination.innerText = item.name +', ' + item.location;
      list.appendChild(destination, checkbox);
      list.appendChild(checkbox);
      itemCoords = {lat: item.lat, lng: item.lng};
      console.log(newMap);
      newMap.addMarker(itemCoords, item.img, item.description);
    })
  };

};

window.onload = app;