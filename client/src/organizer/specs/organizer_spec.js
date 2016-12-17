var Organizer = require('../organizer');
var Trip = require('../trip');
var assert = require('assert');

describe('organizer', function() {
  it('should start off with no trips ', function() {
    var organizer = new Organizer();
    assert.equal(0, organizer.trips.length);
  });

  it('should be able to add trip', function() {
    var organizer = new Organizer();
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500});
    organizer.addTrip(trip);
    assert.deepEqual(trip, organizer.trips[0]);
  });
});