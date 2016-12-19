var Trip = function(params) {
  this.name = params.name;
  this.owner = params.owner;
  this.budget = params.budget;
  this.start_date = params.start_date;
  this.end_date = params.end_date;
  this.start_end_point;
  this.duration = 0;
  this.activities = [];
  this.numberOfActivities = 0;
};

Trip.prototype = {
  // fetchTrip: function() {

  // }
  getDuration: function() {
    date1 = new Date(this.start_date);  
    date2 = new Date(this.end_date); 
    this.duration = Math.round((date2-date1)/(1000*60*60*24))
  },
  addActivity: function(activity) {
    console.log('I was called')
    var url = 'http://localhost:3000/trips/';
    this.activities.push(activity);
    var request = new XMLHttpRequest();
    request.open("PUT", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      if(request.status === 200) {
      }
    };
    console.log(this)
    request.send(JSON.stringify(this));
  },
  removeActivity: function(activity) {
    this.activities.pop(activity);
    // app.post('/trips', function(req,res) {
    //   console.log('body', req.body);
    //   MongoClient.connect(url, function(err, db) {
    //     var collection = db.collection('trips');
    //     collection.update(
    //       db.trips.update({name: tripName},
    //         {$pull: {activities: {
    //           "name": activity.name,
    //         }}})
    //       );
    //     res.status(200).end();
    //     db.close();
    //   });
    // });
  },
  getNumberOfActivities: function() {
    this.numberOfActivities = this.activities.length;
    // app.post('/trips', function(req,res) {
    //   console.log('body', req.body);
    //   MongoClient.connect(url, function(err, db) {
    //     var collection = db.collection('trips');
    //     collection.update(
    //       db.trips.update({name: tripName},
    //         {$set: {activities: []}})
    //       );
    //     res.status(200).end();
    //     db.close();
    //   });
    // });
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
