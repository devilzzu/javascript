(function(global, XHR){
	'use strict';

	// XMLHttpRequest() 생성자 함수를 통해
	// 비동기 통신을 수행할 객체 생성
	var createXHR = (function() {
		// return new XHR(); // 비동기 통신을 할 준비가 되어있다. 
		// 크로스브라우징 고려. IE6이하 웹 브라우저를 위한 대체 코드
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		return function() {
			return new XHR;
		};
	})();
	// 라이브러리, 프레임워크가 이 과정을 해준다. 

	// 1. create
	var xhr = createXHR(); // xhr은 ajax객체이다. 

	// 2. open 메소드 : setting 구간
	// xhr.open('GET', 'data/data.txt'); // 비동기 통신 (true가 기본값)
	// xhr.open('GET', 'data/data.txt', false); // 동기 통신
	// GET, POST 방식중 어느것 사용?, 어느 파일 사용, false쓰면 동기통신 
	// 동기 통신일 경우 : 데이터가 로드될 때까지 기다림
	// 비동기 통신일 경우 : 아래 코드가 바로 해석된다.

	console.log('생성된 xhr 객체:', xhr);

	// 3. send
	// xhr.send();
	// 통신 시작. 동기는 아래코드까지 해석하고 실행
	// 비동기는 send한 상태에서 아래코드 해석 

	
	var result_view = document.querySelector('.ajax-result');
	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

	call_ajax_btn.onclick = updateViewPlace;

	xhr.open('GET', 'data/data.html');

	// 비동기 통신 객체에 이벤트 핸들러 바인딩
	xhr.onreadystatechange = function() {
		console.log(this); // this === xhr 객체
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^ㄴ^');
			// result_view.textContent = '[' + this.statusText + '] ' + this.responseText;
			result_view.innerHTML = this.response;
		} else {
			console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
			result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
		}
		console.log(xhr);
	}

	function updateViewPlace() {
		// AJAX 통신 요청 보내기
		xhr.send();
		// 비동기 통신을 요청했을 경우,
		// 이벤트(`readystatechange`)를 통해 비동기 데이터가 로드된 시점에
		// 아래 조건문이 수행되어야 한다.
	}


	// 동기통신일 때 돌아감
	// call_ajax_btn.onclick = updateViewPlace;

	// function updateViewPlace() {
	// 	// ajx 통신 보내기
	// 	xhr.send();
	// 	if (xhr.status === 200 && xhr.readyState ===4) { // 전송성공
	// 		console.log('통신 데이터 전송 성공 ^^');
	// 		result_view.textContent = xhr.response;
	// 	} else { 
	// 		console.log('통신 데이터 전송 실패 ;( ');
	// 		result_view.textContent = '데이터 로드 실패 ㅜㅜ ';
	// 	}
	// 	console.log(xhr);
	// }

	// // 통신 상태 확인
	// if (xhr.status === 200) { // status가 200이면 전송에 성공한 것이다. 500은 서버에 문제
	// 	console.log('통신 데이터 전송 성공 ^^');
	// 	console.log(xhr.response); // 데이터가 response에 저장되어 있다.
	// 	result_view.textContent = xhr.response;
	// } else { // 데이터 통신 전에 실행되므로 비동기 통신일 때 이것 실행됨. 따라서 이벤트구문 필요
	// 	console.log('통신 데이터 전송 실패 ;( ');
	// 	result_view.textContent = '실제 데이터는 있는데 통신 안되었다.';
	// }

	console.log('생성된 xhr 객체:', xhr); // 여기에서 readyState, status 값 확인해보자.
	// XMLHttpRequest의 능력을 보자. 
	// 앞에 on이 붙은 것 : event 
	// readyState: 0 //시작 
	// response // 응답받은 데이터 

	// console.dir('XMLHttpRequest 생성자.prototype 객체 : ', XHR.prototype);
	// console.log('생성된 xhr 객체:', xhr); 에서 나왔던 xhr.__proto__와 같다. 
	// 용어정리
	// 생성된 xhr은 인스턴스이다. 

})(this, this.XMLHttpRequest);