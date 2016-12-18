var Organizer = function() {
  this.trips = [];
};

Organizer.prototype = {
  addTrip: function(trip) {
    this.trips.push(trip);
  },
  removeTrip: function(trip) {
    this.trips.pop(trip);
  },
};

module.exports = Organizer;