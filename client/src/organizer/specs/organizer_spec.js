var Organizer = require('../organizer');
var Account = require('../trip');
var assert = require('assert');

describe('organizer', function() {
  it('should start off with no bank trips ', function() {
    var organizer = new Organizer();
    assert.equal(0, organizer.trips.length);
  });
});