(function(global, XHR){
	'use strict';

	var xhr = new XHR;
	var result_view = document.querySelector('.ajax-result');

	xhr.open("GET", "./data/gallery.json");
	xhr.send();
	xhr.onreadystatechange = function() {
		if(this.status === 200 && this.readyState === 4) {
			console.log('통신 데이터 전송 성공! ^^'); 

			var data = JSON.parse(this.response);
			var template = '';
			var photos = data.results;
			for(var i=0; i<photos.length; i++){
				/* 다른방법 
				var li = document.createElement("li");
				var a = document.createElement("a");
				var img = document.createElement("img");
				a.setAttribute("class", "photo-link");
				a.setAttribute("href", "javascript:;");
				img.setAttribute("class", "photo-img");
				img.setAttribute("src", photos[i].image);
				li.appendChild(a);
				a.appendChild(img);
				console.log(li)
				result_view.appendChild(li); 
				*/
				template += [
					'<li>',
						'<a href="javascript:;" class="photo-link">',
							'<img class="photo-img" src="'+photos[i].image+'" alt="'+photos[i].alt+'">',
						'</a>',
					'</li>'
				].join('');
			}

		} else {
			console.log('통신 데이터 전송 실패');
		}
		result_view.innerHTML = template;

		var divBlock = document.createElement("div");
		divBlock.setAttribute("class", "black-block");
		var photoLink = document.querySelectorAll('.photo-link');
		var photoImg = document.querySelectorAll('.photo-img');
		var headerHeight = document.querySelector('.page-header').offsetHeight + 10;
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		// 유사배열을 배열로 쓸 수 있게 하기 
		photoLink = Array.prototype.slice.apply(photoLink);

		for(var i=0; i<photoLink.length; i++){
			photoLink[i].onclick = function() {
				var idx = photoLink.indexOf(this);
				// var newLink = photoLink.splice(idx, 1);
				for(var j=0; j<photoLink.length; j++){
					if( j !== idx ) {
						photoLink[j].classList.toggle("off");
					}
				}
				this.classList.toggle("on");
			}
		}
		
	}

	

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));

