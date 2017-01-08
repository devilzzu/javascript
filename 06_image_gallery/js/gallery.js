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

		// var divBlock = document.createElement("div");
		// divBlock.setAttribute("class", "black-block");

		// class="photo-link"인 요소들을 모두 선택합니다.
		// 이 때 변수 photoLink에 요소들이 유사배열로 저장됩니다.
		var photoLink = document.querySelectorAll('.photo-link');
		var photoImg = document.querySelectorAll('.photo-img');
		// var headerHeight = document.querySelector('.page-header').offsetHeight + 10;
		// var windowWidth = window.innerWidth;
		// var windowHeight = window.innerHeight;
		// 유사배열을 배열로 쓸 수 있게 하기 
		photoLink = Array.prototype.slice.apply(photoLink);

		for(var i=0; i<photoLink.length; i++){
			photoLink[i].onclick = function() {
				// 클릭한 요소가 몇번째 index에 있는가
				var idx = photoLink.indexOf(this);
				for(var j=0; j<photoLink.length; j++){
					if( j !== idx ) {
						photoLink[j].classList.toggle("off");
					}
				}
				this.classList.toggle("on");
			}
		}

		var slideBtn = document.querySelector(".slide-btn");
		slideBtn.onclick = function(){
			this.setAttribute('disabled', true);
			this.style.cursor = "wait";
			var index = 0;
			photoLink[index].classList.add("on");
			var intervalId = setInterval( function(){
				index++;
				photoLink[index-1].classList.remove("on");
				if(index < photoLink.length){
					
					photoLink[index].classList.add("on");
					console.log(index);
				}
				else{ 
					clearInterval(intervalId); 
					slideBtn.removeAttribute('disabled');
					slideBtn.style.cursor = "pointer";
				}
			}, 2000);
		}
	}

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));