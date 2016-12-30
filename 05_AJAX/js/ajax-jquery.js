(function(global, XHR){
	'use strict';

	// jQuery AJAX 단축 유틸리티 메소드
	// JSON만 사용할 경우 
	// var json = $.getJSON('http://api.randomuser.me/?results=20&gender=female&nat=gb,br');
	// json.then(function(data, status, XHR){
	// 	console.log(data.results);
	// 	// 이미 객체로 되어있다. 
	// });

	// jQuery AJAX Low-Level Interface 메소드 (단축하지 않음)
	// 다른 파일도 나중에 사용할 경우 
	$.ajax({
		'url': "http://api.randomuser.me/?results=20",
		'dataType': 'json',
		'success' : function(data, status, XHR) {
			console.log(data.results);
		}
	});

})(this, this.XMLHttpRequest);