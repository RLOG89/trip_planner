var whisky = require('../api/whisky.js');
var sports = require('../api/sports.js');
var movies = require('../api/movies.js');
var historic = require('../api/historic.js');



var app = function() {
  console.log("here");
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
  }
};

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

var populateList = function(thing,clear) {
  var list = document.getElementById('list');
  list.innerHTML = "";
  if (clear) return;
  thing.forEach(function(item) {
    var destination = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = item.name;
    checkbox.value = false;
    checkbox.id = item.name;

    destination.innerText = item.name +', ' + item.location;
    list.appendChild(destination);
    list.appendChild(checkbox);
  })
};


window.onload = app;