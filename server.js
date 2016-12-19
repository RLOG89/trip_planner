var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var MongoClient = require('mongodb').MongoClient, 
assert = require('assert');
var ObjectID = MongoClient.ObjectID;

var url = 'mongodb://localhost:27017/scotrip';


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.get('/trips', function(req,res) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.find({}).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

// app.get('/trips/:id', function(req,res) {
//   res.sendFile({id:req.params.id});
//   MongoClient.connect(url, function(err, db) {
//     collection.find({id.req.params.id})
//   })
// })

app.post('/trips', function(req,res) {
  console.log('body', req.body);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.insert(
      { "name": req.body.name,
        "owner": req.body.owner,
        "budget": req.body.budget,
        "start_date": req.body.start_date,
        "end_date": req.body.end_date,
        "start_end_point": req.body.start_end_point,
        "duration": 0,
        "activities": [],
        "number_of_activities": 0
      }
    );
    res.status(200).end();
    db.close();
  });
});

app.get('/trips/:id/edit', function(req,res) {
  // res.sendFile({id:req.params.id});
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.findOne({_id: ObjectId(req.params.id)}, function(err, document) {
      console.log(document.name);
    });
  })
})

app.put('/trips/:id', function(req,res) {
  console.log('body', req.body);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.update(
      {"_id": new ObjectID(req.params.id)}, 
      {$push: {"activities": req.body.item.name}}
      );
    res.status(200).end();
    db.close();
  });
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

});

// xxxxxxxxxxx

// var express = require('express');
// var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());


//   , assert = require('assert');

// // Connection URL

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });



// app.post('/accounts', function(req,res) {
//   console.log('body', req.body);
//   MongoClient.connect(url, function(err, db) {
//     var collection = db.collection('accounts');
//     collection.insert(
//       { "owner": req.body.owner,
//         "amount": req.body.amount,
//         "type": req.body.type
//       }
//     );
//     res.status(200).end();
//     db.close();
//   });
// });

// app.use(express.static('client/build'));


// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });
