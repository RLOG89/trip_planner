var whisky = require('../api/whisky.json');
var sports = require('../api/sports.json');
var movies = require('../api/movies.json');
var historic = require('../api/historic.json');

var list = document.findElementById('list');

var whiskyList = function(whisky) {
  whisky.forEach(function(item) {
    var liName = document.createElement('li');
    var liLocation = document.createElement('li')
    var liDescription = document.createElement('li')
    var liImg = document.createElement('img')
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