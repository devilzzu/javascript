(function(global, XHR){
	'use strict';

	var xhr = new XHR;
	var result_view = document.querySelector('.ajax-result');

	xhr.open("GET", "./data/gallery.json");
	xhr.send();

	xhr.onreadystatechange = function() {
		if(this.status === 200 && this.readyState === 4) {
			console.log('통신 데이터 전송 성공! ^^'); 
			// console.log(this.response);
			var data = JSON.parse(this.response);
			var template = '';
			var photos = data.results;
			for(var photo of photos){
				template += [
					'<li>',
						'<img src="'+photo.image+'" alt="">',
					'</li>'
				].join('');
			}
		} else {
			console.log('통신 데이터 전송 실패');
		}
		result_view.innerHTML = template;
	}

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));