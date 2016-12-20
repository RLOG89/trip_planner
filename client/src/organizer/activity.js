var Activity = function(params) {
  this.name = params.name;
  this.cost = params.cost;
  this.duration = params.duration;
  this.completed = false;
  this.lat = params.lat;
  this.lng = params.lng;
  this.notes = "";
  };

  Activity.prototype = {
    setCompleted: function() {
      this.completed = true;
    },
    addNote: function(note) {
      this.notes = this.notes + note;
    },

};

module.exports = Activity;