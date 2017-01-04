(function(global, XHR){
	'use strict';

	var xhr = new XHR;
	xhr.open("GET", "./data/gallery.json");
	xhr.send();
	xhr.onreadystatechange = function() {
		if( this.status === 200 && this.readyState === 4 ) {
			console.log(this.response);
		}
	}

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));