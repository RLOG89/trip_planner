var Activity = function(params) {
  this.name = params.name;
  this.cost = params.cost;
  this.duration = params.duration;
  this.completed = false;
  this.notes = "";
};

Activity.prototype = {
  setCompleted: function() {
    this.completed = true;
  },
  addNote: function(note) {
    this.notes = this.notes + note;
  },
  toStringHours: function() {
    if (this.duration === 0.25) {
     return "quarter of a day";
   }
   if(this.duration === 0.5) {
     return "half a day";
   }
   if (this.duration === 1) {
     return "a full day";
   }

 }

};

module.exports = Activity;