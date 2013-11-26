/*
 * app initialization
 */
var base_url, defaultView, partialsMap;
function init() {
	// base_url = '/kudos/'; //base_url
	defaultView ="map"; //default view
	partialsMap = { //map of view partials
		map: {
			url: 'partials/map.html',
			callback: null
		},
		event: {
			url: 'partials/newEventPage.html',
			callback: null
		},
		stats: {
			url: 'partials/stats.html',
			callback: null
		},
		share: {
			url: 'partials/share.html',
			callback: null
		},
		login: {
			url: 'partials/login.html',
			callback: null
		},
		splash: {
			url: 'splash.html',
			callback: null
		}
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
		location = partialsMap[id].url;

	http.open( "GET", location, true );
	http.onreadystatechange = receiveResponse;
	http.send(); 
	// if (id === 'map' && partialsMap.map.callback !== null)
		// partialsMap.map.callback();
		
};
function submitEvent(){
    var dateInput= document.getElementById('date').value;
    var timeInput= document.getElementById('time').value;
    var locationInput= document.getElementById('location').value;
    var eventDescInput= document.getElementById('eventDesc').value;
    
    console.log(dateInput);
    console.log(timeInput);
    console.log(locationInput);
    console.log(eventDescInput);
  
  
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
	partialsMap.map.callback = initialize;
	loadScript();
}