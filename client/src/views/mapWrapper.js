var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords, image, description) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
      });
       var infowindow = new google.maps.InfoWindow({
        content: '<IMG BORDER="0" ALIGN="Left" SRC="' + image + '">' + description
      });
       marker.addListener('click', function() {
        infowindow.open(this, marker);
  })
  }
}




module.exports = MapWrapper;