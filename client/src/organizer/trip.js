var Trip = function(params) {
  this.name = params.name;
  this.owner = params.owner;
  this.budget = params.budget;
  this.start_date = params.start_date;
  this.end_date = params.end_date;
  this.duration = 0;
  this.activities = [];
};

Trip.prototype = {
  getDuration: function() {
    date1 = new Date(this.start_date);  
    date2 = new Date(this.end_date); 
    this.duration = Math.round((date2-date1)/(1000*60*60*24))
  },
  addActivity: function(activity) {
    this.activities.push(activity);
  },

}

module.exports = Trip;
