(function(global, XHR){
	'use strict';

	var xhr = new XHR;
	var result_view = document.querySelector('.ajax-result');

	xhr.open("GET", "./data/gallery.json");

	xhr.onreadystatechange = function() {
		if(this.status === 200 && this.readyState === 4) {
			console.log('통신 데이터 전송 성공! ^^'); 
			// console.log(this.response);
			var data = JSON.parse(this.response);
			var template = '';
			var photos = data.results;
			for(var i=0; i<photos.length; i++){
				template += [
					'<li>',
						'<a href="#" class="photo-link">',
							'<img class="photo-img" src="'+photos[i].image+'" alt="'+photos[i].alt+'">',
						'</a>',
					'</li>'
				].join('');
			}
			// IE에서는 for of 문이 안됨 
			// for(var photo of photos){
			// 	template += [
			// 		'<li>',
			// 			'<a href="#" class="photo-link">',
			// 				'<img class="photo-img" src="'+photo.image+'" alt="'+photo.alt+'">',
			// 			'</a>',
			// 		'</li>'
			// 	].join('');
			// }
		} else {
			console.log('통신 데이터 전송 실패');
		}
		result_view.innerHTML = template;
		console.log('okok')
	}

	xhr.send();

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));

