var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient, 
assert = require('assert');
var ObjectId = mongodb.ObjectID;

var url = 'mongodb://localhost:27017/scotrip';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/trips', function(req,res) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.find({
      "user_name" : req.query.user_name
    }).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

app.post('/trips', function(req,res) {
  console.log('body', req.body);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.insertOne(
      { "user_name": req.body.user_name,
        "password": req.body.password,
        "name": req.body.name,
        "owner": req.body.owner,
        "budget": req.body.budget,
        "cost": 0,
        "start_date": req.body.start_date,
        "end_date": req.body.end_date,
        "duration": 0,
        "activities": [],
        "number_of_activities": 0,
        "start_end_point": req.body.start_end_point,
        "completed": false,
        "in_budget": true,
        "distance_km": 0,
        "distance_miles": 0
      }, function(err, newTrip){
        res.status(200).send(newTrip.insertedId);
        db.close();
      }
    );
  });
});

app.get('/trips/:id/edit', function(req,res) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.findOne({_id: ObjectId(req.params.id)}, function(err, document) {
      console.log(document.name);
      res.status(200).send(document);
      db.close();
    });
  })
})

app.get('/trips/:id', function(req,res) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.findOne({_id: ObjectId(req.params.id)}, function(err, document) {
      console.log(document.name);
      res.status(200).send(document);
      db.close();
    });
  })
})

app.put('/trips/:id', function(req,res) {
  console.log('body', req.body);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.update(
      {"_id": new ObjectId(req.params.id)}, 
      {$set: 
        {
          "activities": req.body.activities,
          "number_of_activities": req.body.numberOfActivities
        }
      });
    res.status(200).end();
    db.close();
  });
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

});