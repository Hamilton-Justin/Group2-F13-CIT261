/*
 * app initialization
 */
var map;

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(43.8120426, -111.798514),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('mapContainer'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);