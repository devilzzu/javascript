(function(global, XHR){
	'use strict';

	var createXHR = (function() {
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		return function() {
			return new XHR;
		};
	})();

	var xhr = createXHR();

	// console.log('생성된 xhr 객체:', xhr);
	
	var result_view = document.querySelector('.ajax-result');
	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

	call_ajax_btn.onclick = updateViewPlace;

	xhr.open('GET', 'data/data.json'); // 내 파일
	// xhr.open('GET', 'http://api.randomuser.me/?results=20&gender=female&nat=gb,br');


	xhr.onreadystatechange = function() {
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^ㄴ^'); 
			console.log(this.response);
			// json
			var random_users = this.response; // text file
			console.log(typeof random_users);
			var template = '<table>';
			// text -> object 
			// json 객체의 parse() 메소드 사용
			// json.parse( json 문자열 -> 객체)
			// text <- object
			// json 객체의 stringify() 메소드 사용
			// json.stringify( javascript(json형태) 객체 -> text) 
			random_users = JSON.parse(random_users); // text -> object 
			var people = random_users.results; // json파일내에 있는 속성 results
			// people 반복 순환 처리
			for(var person of people) {
				// console.log(person.name.first + ' ' + person.name.last);
				person.fullname = `${person.name.first} ${person.name.last}`;

				template += [

					'<tr>',
						'<td class="name">'+person.fullname+'</td>',
						'<td class="email">'+person.email+'</td>',
						'<td class="picture"><img src='+person.picture.thumbnail+'></td>',
					'</tr>'

				].join('');
			}
		} else {
			console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
			// result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
		}
		template += '</table>';
		result_view.innerHTML = template;
	}

	function updateViewPlace() {
		xhr.send();
		
	}

})(this, this.XMLHttpRequest);