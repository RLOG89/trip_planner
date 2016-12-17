var Trip = require('../trip');
var assert = require('assert');

describe('trip', function() {
  it('should have a name', function() {
    var trip = new Trip({name:'Ross',budget:500});
    assert.equal(trip.name, 'Ross');
  });
});