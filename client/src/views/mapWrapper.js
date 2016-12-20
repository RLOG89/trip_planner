var MapWrapper = function(container, coords, zoom) {
  this.markers = [];
  this.itineraryMarkers = [];
  this.map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords, image, description, icopng) {
    var marker = new google.maps.Marker({
      
      position: coords,
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: icopng
    });

    var infowindow = new google.maps.InfoWindow({
      content: '<IMG BORDER="0" ALIGN="Left" SRC="' + image + '">' + description
    });
    marker.addListener('click', function() {
      infowindow.open(this, marker);
    })
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
  },

  addItineraryMarker: function(coords, name) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      animation: google.maps.Animation.DROP
    });
    var infowindow = new google.maps.InfoWindow({
      content: name
    });
    marker.addListener('click', function() {
      infowindow.open(this, marker);
    })
    this.itineraryMarkers.push(marker);
  }

}

module.exports = MapWrapper;