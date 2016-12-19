var Activity = function(params) {
  this.name = params.name;
  this.cost = params.cost;
  this.duration = params.duration;
  this.completed = false;
  };

  Activity.prototype = {
    setCompleted: function() {
      this.completed = true;
    },
};

module.exports = Activity;