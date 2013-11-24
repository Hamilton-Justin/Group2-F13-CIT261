/*
 * app initialization
 */
var base_url, defaultView, partialsMap;
function init() {
	// base_url = '/kudos/'; //base_url
	defaultView ="map"; //default view
	partialsMap = { //map of view partials
		map: 	'partials/map.html',
		event: 'partials/newEventPage.html',
		stats: 'partials/stats.html',
		share: 'partials/share.html',
		login: 'partials/login.html',
		splash: 'splash.html'
	};
};
init();
getURL();
newPartial();

function getURL() {
	var location = window.location.href;
	console.log(location);
};


function newPartial(id) {
	var http = new XMLHttpRequest(),
		id = id ? id : defaultView,
		location = partialsMap[id];

	http.open( "GET", location, true );
	http.onreadystatechange = receiveResponse;
	http.send(); 
};

/*
 * receives response from for partial request - newPartial()
 *  also creates new wrapper div element for an animated class.
 */
function receiveResponse(e) {
	// console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        // http.readyState == 4, so we've received the complete server response
        // http.status == 200, so the response is good
        var old = document.getElementById('partialWrapper').childNodes[0],
        	div = document.createElement("div");
        div.className = 'animated fadeInUp';
        div.innerHTML = this.response;
		document.getElementById('partialWrapper').replaceChild(div, old);

		// if (document.getElementById('mapContainer'))
		// 	google.maps.event.addDomListener(window, 'load', initialize);
    }
};

/*
 * adds/removes 'active' class
 *
 * @param {string} id for active class to be applied to
 */
function changeActiveClass(id) {
	var active = ' active',
		old = document.querySelector('nav').querySelectorAll('li');
		el = document.getElementById(id);

	//remove active class first
	for (var i=0; i < old.length; i++){
		old[i].className = old[i].className.replace(active, "");
	}
	//add active class to selector
	el.className = el.className.replace(active, "");
	el.className = el.className + active;
};

// function vis(id) {
// 	return {
// 		var elem = document.getElementById(id);
// 		show: = function(id) {
// 			elem.className.replace(hide, "");
// 		},
// 		hide: = function(id) {

// 		}
// 	}
// };
window.onload = function(){
	var nav = document.querySelector('ul#navItems');

	nav.addEventListener('click', function(event) {
		var target = event.target,
			id = event.target.id;

		while (target.tagName !== 'LI') {
			target = target.parentNode;
			if (target === nav) return;
		}
		newPartial(id);
		changeActiveClass(id);
	});
}