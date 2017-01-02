var MapWrapper = function(container, coords, zoom) {
  this.markers = [];
  this.itineraryMarkers = [];
  this.map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords, name, cost, duration, icopng) {
    var marker = new google.maps.Marker({
      
      position: coords,
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: icopng
    });

    var infowindow = new google.maps.InfoWindow({
      content: '<b> Name:</b> ' + name + '<br><b> Cost:</b> £' + cost + '<br><b> Duration:</b> ' + duration + ' days'
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
  setMapOnAllItinerary: function(map) {
    for (var i = 0; i < this.itineraryMarkers.length; i++) {
      this.itineraryMarkers[i].setMap(map);
    }
  },
  clearMarkers: function() {
    this.setMapOnAll(null);
  },
  clearItineraryMarkers: function() {
    this.setMapOnAllItinerary(null);
  },
  deleteMarkers: function() {
    this.clearMarkers();
    this.markers = [];
  },
  deleteItineraryMarkers: function() {
    this.clearItineraryMarkers();
    this.itineraryMarkers = [];
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