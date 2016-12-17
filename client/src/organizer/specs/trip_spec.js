var Trip = require('../trip');
var assert = require('assert');

describe('trip', function() {
  it('should have a name', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500});
    assert.equal(trip.name, 'Distillery Tour 2016');
  });

  it('should have an owner', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500});
    assert.equal(trip.owner, 'Ross');
  });

  it('should have a budget', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500});
    assert.equal(trip.budget, 500);
  });




});