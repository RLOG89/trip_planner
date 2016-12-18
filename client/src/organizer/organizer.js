var Organizer = function() {
  this.trips = [];
};

Organizer.prototype = {
  addTrip: function(trip) {
    this.trips.push(trip);
  },

};

module.exports = Organizer;