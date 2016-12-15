var whisky = require('../api/whisky.js');
var sports = require('../api/sports.json');
var movies = require('../api/movies.json');
var historic = require('../api/historic.json');

var list = document.findElementById('list');

var app = function() {
  console.log('called')
  whiskyList(whisky)
}

var whiskyList = function(whisky) {
  var jsonString = JSON.parse(whisky);
  console.log('function entered');
  jsonString.forEach(function(item) {
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
}

window.onload = app;