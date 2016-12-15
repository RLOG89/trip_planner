var whisky = require('../api/whisky.js');
var sports = require('../api/sports.js');
var movies = require('../api/movies.js');
var historic = require('../api/historic.js');



var app = function() {
  populateList(whisky);
  populateList(sports);
  populateList(movies);
  populateList(historic);
}

var populateList = function(thing) {
  var list = document.getElementById('list');
  thing.forEach(function(item) {
    var liName = document.createElement('li');
    var liLocation = document.createElement('li');
    var liDescription = document.createElement('li');
    var liImg = document.createElement('img');
    liName.innerText = item.name;
    liLocation.innerText = item.location;
    liDescription.innerText = item.description;
    liImg.src = item.img;
    list.appendChild(liName);
    list.appendChild(liLocation);
    list.appendChild(liDescription);
    list.appendChild(liImg);
  })
};


window.onload = app;