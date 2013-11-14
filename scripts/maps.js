/*
 * app initialization
 */
var map;

function initialize() {
	var latLng= new google.maps.LatLng(43.8120426, -111.798514);
	var mapOptions = {
		zoom: 8,
		center: latLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('mapContainer'),
		mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);