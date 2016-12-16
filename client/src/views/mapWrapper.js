var MapWrapper = function(container, coords, zoom) {
  this.markers = []
  this.map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.map
    });
    this.markers.push(marker);
  },
  setMapOnAll: function(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
      }
  },
  clearMarkers: function() {
    this.setMapOnAll(null);
  },
  // showMarkers: function() {
  //   this.setMapOnAll(this.map);
  // },
  deleteMarkers: function() {
    this.clearMarkers();
    this.markers = [];
  }

};

module.exports = MapWrapper;