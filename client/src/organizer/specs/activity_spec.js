var Activity = require('../activity');
var assert = require('assert');

describe('activity', function() {
  it('should have a name', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    assert.equal(activity.name, 'Glenmorangie');
  });
  it('should have a cost', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    assert.equal(activity.cost, '50');
  });
  it('should have a duration', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    assert.equal(activity.duration, '0.5');
  });

  it('should have a completed status default to false', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    assert.equal(activity.completed, false);
  });

  it('should be able to complete activity', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    activity.setCompleted();
    assert.equal(activity.completed, true);
  });
  it('should start with notes empty', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    assert.equal(activity.notes, '');
  });
  it('should be able to add note', function() {
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    note = "really good activity";
    activity.addNote(note);
    assert.equal(activity.notes, 'really good activity');
  });

});