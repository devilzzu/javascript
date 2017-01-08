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

		var photoLink = document.querySelectorAll('.photo-link');
		var photoImg = document.querySelectorAll('.photo-img');
		// 유사배열을 배열로 쓸 수 있게 하기 
		photoLink = Array.prototype.slice.apply(photoLink);
		var slideBtn = document.querySelector(".slide-btn");
		var slideBtnIcon = document.querySelector(".slide-btn .fa");
		// 슬라이드 버튼이 눌렸는지 확인하기 
		var chkBtn = false;
		// 사진 확대 눌렀는지 확인하기 
		var photoClick = false;
		var index = 0;
		// 브라우저 height
		var windowHeight = window.innerHeight;
		// 검정배경 Div요소 만들기 
		var photoGallery = document.querySelector('.photo-gallery').firstElementChild;
		var menuCoverDiv = document.createElement('div');
		menuCoverDiv.setAttribute('class', 'menu-cover');
		// menuCoverDiv.style.height = photoGallery.parentNode.offsetHeight;
		// photoGallery.parentNode.insertBefore(menuCoverDiv, photoGallery);
		// 검정 배경 나오게 하기 
		function menuCover(el) {
			// 목표노드.부모노드.insertBefore(insert삽입할노드, target목표노드)
			photoGallery.parentNode.insertBefore(menuCoverDiv, photoGallery);
			// 확대된 사진의 height
			var photoHeight = el.offsetHeight;
			// 사진크기와 브라우저크기를 비교하여 검정 배경 height 정하기
			if(windowHeight > photoHeight){
				menuCoverDiv.style.height = windowHeight+'px';
			}else{
				menuCoverDiv.style.height = (photoHeight+90)+'px';
			}
		}
		// 검정 배경 없애기 
		function removeMenuCover() {
			photoGallery.parentNode.removeChild(menuCoverDiv);
		}
		// 각 사진 클릭시 photoShow 함수 실행 
		function photoAddEvent() {
			for(var i=0; i<photoLink.length; i++){
				photoLink[i].style.cursor = "pointer";
				photoLink[i].addEventListener("click", photoShow, false);
			}
		}
		photoAddEvent();
		// removeEvent
		function photoRemoveEvent() {
			for(var i=0; i<photoLink.length; i++){
				photoLink[i].style.cursor = "default";
				photoLink[i].removeEventListener("click", photoShow, false);
			}
		}
		// 사진 클릭시 커지는 함수 
		function photoShow() {
			var idx = photoLink.indexOf(this);
			for(var j=0; j<photoLink.length; j++){
				if( j !== idx ) {
					photoLink[j].classList.toggle("off");
				}
			}
			this.classList.toggle("on");
			if(!photoClick){
				menuCover(this);
				photoClick = !photoClick;
			}else{
				removeMenuCover();
				photoClick = !photoClick;
			}
			
		}
		// 슬라이드 쇼 함수
		function slideShow() {
			menuCover(photoLink[index]);
			photoLink[index].classList.add("on");

			for(var j=0; j<photoLink.length; j++){
				if( j !== index ) {
					photoLink[j].classList.add("off");
				}
			}
			global.slideInterval = setInterval(function(){
				index++;
				if(index < photoLink.length){
					photoLink[index-1].classList.remove("on");
					photoLink[index-1].classList.add("off");
					photoLink[index].classList.remove("off");
					photoLink[index].classList.add("on");
					
					console.log(index);
				}else {
					photoLink[index-1].classList.remove("on");
					clearInterval(slideInterval);
					photoAddEvent();
					removeMenuCover();
					slideBtn.classList.remove("pause-interval");
					slideBtn.classList.remove("on");
					for(var j=0; j<photoLink.length; j++){
						photoLink[j].classList.remove("off");
					}
					index = 0;
					chkBtn = !chkBtn;
				}
				
			}, 2000);
		}
		// 슬라이드 버튼 클릭시 
		slideBtn.onclick = function(){
			if(!chkBtn){
				slideShow();
				photoRemoveEvent();
				slideBtn.classList.remove("pause-interval");
				slideBtn.classList.add("on");
				chkBtn = !chkBtn;
			}else{
				clearInterval(global.slideInterval);
				slideBtn.classList.remove("on");
				slideBtn.classList.add("pause-interval");
				chkBtn = !chkBtn;
			}
			
		}
		
	}

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));