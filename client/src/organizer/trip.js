var Trip = function(params) {
  this.name = params.name;
  this.owner = params.owner;
  this.budget = params.budget;
  this.start_date = params.start_date;
  this.end_date = params.end_date;
  this.duration = 0;
  this.activities = [];
  this.numberOfActivities = 0;
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
  removeActivity: function(activity) {
    this.activities.pop(activity);
  },
  getNumberOfActivities: function() {
    this.numberOfActivities = this.activities.length;
  },
  totalTripCost: function() 
    {
        var total = 0;
        for (var activity of this.activities)
        {
            total += activity.cost;
        }
        return total;
    },

}

module.exports = Trip;
