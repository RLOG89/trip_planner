var Trip = require('../trip');
var Activity = require('../activity');
var assert = require('assert');

describe('trip', function() {
  it('should have a name', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.name, 'Distillery Tour 2016');
  });

  it('should have an owner', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.owner, 'Ross');
  });

  it('should have a budget', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.budget, 500);
  });

  it('should have start date', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.start_date, "December 17, 2016 12:00:00");
  });

  it('should have end date', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.end_date, "December 25, 2016 12:00:00");
  });

  it('should have duration', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    trip.getDuration();
    assert.equal(trip.duration, 8);
  });

  it('should start off with no activities ', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    assert.equal(0, trip.activities.length);
  });

  it('should be able to add activity', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    trip.addActivity(activity);
    assert.deepEqual(activity, trip.activities[0]);
  });

  it('should be able to remove activity', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    var activity = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    trip.addActivity(activity);
    assert.deepEqual(activity, trip.activities[0]);
    trip.removeActivity(activity);
    assert.equal(0, trip.activities.length);
  });

  it('should be able to get total number of activities', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    var activity1 = new Activity({name:'Glenmorangie'});
    var activity2 = new Activity({name:'Balvenie'});
    var activity3 = new Activity({name:'Highland Park'});
    trip.addActivity(activity1);
    trip.addActivity(activity2);
    trip.addActivity(activity3);
    trip.getNumberOfActivities()
    assert.equal(3, trip.numberOfActivities);
  });

  it('should be able to get total number of activities completed', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    var activity1 = new Activity({name:'Glenmorangie'});
    var activity2 = new Activity({name:'Balvenie'});
    var activity3 = new Activity({name:'Highland Park'});
    trip.addActivity(activity1);
    trip.addActivity(activity2);
    trip.addActivity(activity3);
    trip.getNumberOfActivities()
    activity1.setCompleted();
    assert.equal(3, trip.numberOfActivities);
    assert.equal(1, trip.getNumberOfActivitiesCompleted());
  });

  it('should be able to get total cost of trip', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    var activity1 = new Activity({name:'Glenmorangie', cost: 50, duration: 0.5});
    var activity2 = new Activity({name:'Balvenie', cost: 50, duration: 0.5});
    var activity3 = new Activity({name:'Highland Park', cost: 50, duration: 0.5});
    trip.addActivity(activity1);
    trip.addActivity(activity2);
    trip.addActivity(activity3);
    trip.getNumberOfActivities()
    assert.equal(3, trip.numberOfActivities);
    assert.equal(150, trip.totalTripCost());
  });

  it('should be able to check if trip is completed', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    var activity1 = new Activity({name:'Glenmorangie'});
    var activity2 = new Activity({name:'Balvenie'});
    var activity3 = new Activity({name:'Highland Park'});
    trip.addActivity(activity1);
    trip.addActivity(activity2);
    trip.addActivity(activity3);
    trip.getNumberOfActivities()
    activity1.setCompleted();
    activity2.setCompleted();
    activity3.setCompleted();
    assert.equal(3, trip.numberOfActivities);
    assert.equal(3, trip.getNumberOfActivitiesCompleted());
    trip.checkCompleted();
    assert.equal(true, trip.completed);
  });










});