(function(global, XHR){
	'use strict';

	var createXHR = (function() {
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		return function() {
			return new XHR;
		};
	})();

	var xhr = createXHR(); 

	var result_view = document.querySelector('.ajax-result');
	var btns = document.querySelectorAll('.gnb button');
	console.log(btns);
	// var call_ajax_btn = [];
	console.log(btns.length);
	for(var i=0, j=btns.length; i<j; i++) {
		// btns[i].openlink = 'data/menu'+[i+1]+'.html';		
		btns[i].openlink = xhr.open('GET', 'data/menu'+[i+1]+'.html');
		btns[i].onclick = updateViewPlace;
		console.log(btns[i].openlink);
	}

	// call_ajax_btn.onclick = updateViewPlace;

	// xhr.open('GET', 'data/menu01.html');

	// 비동기 통신 객체에 이벤트 핸들러 바인딩
	xhr.onreadystatechange = function() {
		console.log(this); // this === xhr 객체
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^ㄴ^');
			// result_view.textContent = '[' + this.statusText + '] ' + this.responseText;
			result_view.innerHTML = this.responseText;
		} else {
			console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
			result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
		}
		console.log(xhr);
	}

	function updateViewPlace() {
		xhr.send();
	}

})(this, this.XMLHttpRequest);