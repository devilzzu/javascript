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
	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

	call_ajax_btn.onclick = updateViewPlace;

	//오늘 날짜
	var d = new Date();
	var yy = d.getFullYear();
	var mm = d.getMonth() + 1;
	var dd = d.getDate() - 1;
	// var today = yy + "" + "" + mm + "" + dd;
	var today = `${yy}${mm}${dd}`;
	xhr.open('GET', "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d878630a10fce1fad53e9b0cdaeb8a18&targetDt="+ today);


	xhr.onreadystatechange = function() {
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^ㄴ^'); 
			console.log(this.response);
			// json
			var getmovies = this.response; // text file
			var template = '<table>';
			getmovies = JSON.parse(getmovies); // text -> object 
			var movies = getmovies.boxOfficeResult.dailyBoxOfficeList; // json파일내에 있는 속성 results
			for(var movie of movies) {

				template += [

					'<tr>',
						'<td class="name">'+movie.movieNm+'</td>',
						// '<td class="email">'+person.email+'</td>',
						// '<td class="picture"><img src='+person.picture.thumbnail+'></td>',
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