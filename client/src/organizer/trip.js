var Trip = function(params) {
  this.name = params.name;
  this.owner = params.owner;
  this.budget = params.budget;
  this.start_date = params.start_date;
  this.end_date = params.end_date;
  this.activities = [];
};

module.exports = Trip;
