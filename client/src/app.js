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
    categories.forEach(function(item) {

      var destination = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = item.name;
      checkbox.value = false;
      checkbox.id = item.name;

      destination.innerText = item.name +', ' + item.location;
      list.appendChild(destination);
      list.appendChild(checkbox);
      itemCoords = {lat: item.lat, lng: item.lng};
      console.log(newMap);
      // newMap.clearMarkers;
      newMap.addMarker(itemCoords, item.img, item.description);
    })
  }

};


window.onload = app;

    //   populateList(sports);
    //   populateList(movies);
    //   populateList(historic);
    // }
  // var populateList = function(thing) {
  //   var list = document.getElementById('list');
  //   thing.forEach(function(item) {
  //     var liName = document.createElement('li');
  //     var liLocation = document.createElement('li');
  //     var liDescription = document.createElement('li');
  //     var liImg = document.createElement('img');
  //     liName.innerText = item.name;
  //     liLocation.innerText = item.location;
  //     liDescription.innerText = item.description;
  //     liImg.src = item.img;
  //     list.appendChild(liName);
  //     list.appendChild(liLocation);
  //     list.appendChild(liDescription);
  //     list.appendChild(liImg);
  //   })
  // };

    // populateList(whisky);
    // populateList(sports);
    // populateList(movies);
    // populateList(historic);