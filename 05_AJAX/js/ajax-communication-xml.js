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

	xhr.open('GET', 'data/data.xml');

	xhr.onreadystatechange = function() {
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^ㄴ^');
			// XML은 responseXML에 담긴다.
			var doc = this.responseXML;
			// xml에서 querySelector를 쓸 수 있다.
			var people = doc.querySelector('people');
			var person_list = people.querySelectorAll('person');

			// xml 내용을 받아서 html로 뿌려주기 
			var template = '<ul>';

			var person, name, tel, mail, i = person_list.length - 1;
			for( ; person_list[i]; i-- ) {
				person = person_list[i];
				name = person.querySelector('name').firstChild.nodeValue;
				tel = person.querySelector('tel').firstChild.nodeValue;
				mail = person.querySelector('mail').firstChild.nodeValue;
				console.log(name, tel, mail);

				template += [
					'<li>',
						'<span class="name"> '+ name +' </span>',
						'<span class="tel"> '+ tel +' </span>',
						'<span class="mail"> '+ mail +' </span>',
					'</li>'
				].join('');
			}
		} else {
			console.log('통신 데이터 전송 실패! ㅠ_ㅠ');
			// result_view.textContent = '[' + this.statusText + '] ' + '데이터 로드에 실패했습니다....';
		}
		// console.log(xhr);
		template += '</ul>';
		result_view.innerHTML = template;
	}

	function updateViewPlace() {
		xhr.send();
	}

})(this, this.XMLHttpRequest);