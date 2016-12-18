var DbHelper = function() {
};

DbHelper.prototype = {
  addTripItem: function(tripName, activity) {
    app.post('/trips', function(req,res) {
      console.log('body', req.body);
      MongoClient.connect(url, function(err, db) {
        var collection = db.collection('trips');
        collection.update(
          {name: tripName}, 
          {$push: {activities: activity}}
          );
        res.status(200).end();
        db.close();
      });
    });
  },
  removeTripItem: function(tripName, activity) {
    app.post('/trips', function(req,res) {
      console.log('body', req.body);
      MongoClient.connect(url, function(err, db) {
        var collection = db.collection('trips');
        collection.update(
          db.trips.update({name: tripName},
            {$pull: {activities: {
              "name": activity.name,
            }}})
          );
        res.status(200).end();
        db.close();
      });
    });
  },
  removeAllItemFromTrip: function(tripName) {
    app.post('/trips', function(req,res) {
      console.log('body', req.body);
      MongoClient.connect(url, function(err, db) {
        var collection = db.collection('trips');
        collection.update(
          db.trips.update({name: tripName},
            {$set: {activities: []}})
          );
        res.status(200).end();
        db.close();
      });
    });
  }
}



// db.trips.insert({
//   "name": "Trip to North",
//   "owner": "Ross",
//   "budget": 100,
//   "start_date": "12/12/16",
//   "end_date": "14/12/16",
//   "activities": []
// });

// db.trips.update({name: 'Trip to North'},
//   {$push: {activities: {
//   "lat": 56.346025, 
//   "lng": -2.802696,
//   "sport": "Golf",
//   "location": "St. Andrews",
//   "name": "The Old Course",
//   "description": "The oldest and most iconic golf course in the world. The Swilcan Bridge and Hell Bunker are recognised across the globe, yet the greatest feature of the Old Course is that despite its grand status it remains a public golf course, open to all.",
//   "img": "/images/the_old_course.jpg"
// }}}
// );

// db.trips.update({name: 'Trip to North'},
//   {$pull: {activities: {
//   "name": "The Old Course",
// }}}
// );

// db.trips.update({name: 'Trip to North'}, 
//   { $set : {activities: [] }
// });

// db.animals.find({
//   name: 'Fred'
// });

// db.animals.update({name: 'Fred'}, {
//     $set: {type: 'Goose'}
//   });

// db.animals.find();

// db.animals.remove({
//   name: 'Fred'
// });

// db.animals.find();

// db.dropDatabase();

module.exports = DbHelper;
