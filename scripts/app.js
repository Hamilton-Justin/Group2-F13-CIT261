function getURL() {
	var location = window.location.href;
	console.log(location);
	
}
getURL();

//default view
var defaultView="partials/map.html";
function newPartial(url) {
	var http = new XMLHttpRequest(); 
	http.open( "GET", url, true );
	// http.onreadystatechange = receiveResponse;
	http.send(); 
}
// newPartial(defaultView);


function receiveResponse(e) {
    if (this.readyState == 4) {
        // http.readyState == 4, so we've received the complete server response
        if (this.status == 200) {
            // http.status == 200, so the response is good
            var response = this.responseXML;
            // create a 'div' element to wrap it 
			var elem = document.createElement('div'); 
			// inject the file in the div 
			elem.innerHTML = response; 
			// add the div to the document 
			document.body.appendChild( elem ); 
        }
    }
}

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
}


