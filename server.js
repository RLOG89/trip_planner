var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var MongoClient = require('mongodb').MongoClient, 
assert = require('assert');

var url = 'mongodb://localhost:27017/scotrip';


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.get('/trips', function(req,res) {

  // Connection URL
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.find({}).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

app.post('/trips', function(req,res) {
  console.log('body', req.body);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('trips');
    collection.insert(
      { "name": req.body.name,
        "owner": req.body.owner,
        "budget": req.body.budget,
        "start_date": req.body.start_date,
        "end_date": req.body.end_date
      }
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
