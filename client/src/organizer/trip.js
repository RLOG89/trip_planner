var ajaxHelper = require('../helper/ajaxHelper.js');

var Trip = function(params) {
  this.name = params.name;              // the name of the trip e.g Distillery tour 2016
  this.owner = params.owner;            // the full name of the trips owner
  this.budget = params.budget;          // the total budget for the trip
  this.cost = 0;                        // the cost of the trip for all activities
  this.start_date = params.start_date;  // start date of trip as String
  this.end_date = params.end_date;      // end date of trip as String
  this.duration = 0;                    // the duration of the trip 
  this.activities = [];                 // array to hold all the activities as activity objects
  this.numberOfActivities = 0;          // number of activities in the array
  this.startEndPoint = params.start_end_point;           // the start/end point of the trip as a String
  this.completed = false;               // trip completed status if all activities are complete
  this.inBudget = true;                 // trip in buget status
  this.distanceKm = 0;
  this.distanceMiles = 0;
};

Trip.prototype = {
  // showTrip: function(id) {
  //   var url = "http://localhost:3000/trips/" + id.replace(/"/g, '');
  //   ajaxHelper.makeGetRequest(url, function(text) { 
  //     var trip = JSON.parse(text);
  //     console.log(trip)
  //     for(items of trip) {
  //       console.log(items)
  //     }
  //   })    
  // }
  getDuration: function() {
    date1 = new Date(this.start_date);  
    date2 = new Date(this.end_date); 
    this.duration = Math.round((date2-date1)/(1000*60*60*24))
  },
  addActivity: function(id, activity) {
    // console.log('I was called', id, activity);
    var url = "http://localhost:3000/trips/" + id.replace(/"/g, '');
    this.activities.push(activity);
    this.numberOfActivities ++;
    var request = new XMLHttpRequest();
    request.open("PUT", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      if(request.status === 200) {
      }
    };
    // console.log("Trip:", this)
    request.send(JSON.stringify(this));
  },
  removeActivity: function(activity) {
    // var url = "http://localhost:3000/trips/" + id.replace(/"/g, '');
    // var index = this.activities.indexOf(activity)
    // for (var activity of this.activities) {
    //   this.activities.splice(index, 1);
    // }
    // var request = new XMLHttpRequest();
    // request.open("PUT", url);
    // request.setRequestHeader("Content-Type", "application/json");
    // request.onload = function() {
    //   if(request.status === 200) {
    //   }
    // };
    // console.log("Trip:", this)
    // request.send(JSON.stringify(this));
  },
  getNumberOfActivities: function() {
    this.numberOfActivities = this.activities.length;
  },
  getNumberOfActivitiesCompleted: function() {
    var total = 0;
    for (var activity of this.activities)
    {
      if (activity.completed){ 
        total ++;
      }      
    }
    return total;
  },
  totalTripCost: function() {
    var total = 0;
    for (var activity of this.activities)
    {
     total += activity.cost;
   }
   this.cost = total;
   if (this.cost > this.budget) {
    this.inBudget = false;
  }
  else{
    this.inBudget = true;
  }
  return total;
},
checkCompleted: function() {
  this.getNumberOfActivities();
  if (this.numberOfActivities = this.getNumberOfActivitiesCompleted()){
    this.completed = true;
  };
},
getMiles: function() {
  this.distanceMiles = this.distanceKm * 1.6;
},
}
module.exports = Trip;
