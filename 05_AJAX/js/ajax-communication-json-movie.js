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

	//오늘 날짜
	var d = new Date();
	var yy = d.getFullYear();
	var mm = d.getMonth() + 1;
	var dd = d.getDate() - 1;
	// var today = yy + "" + "" + mm + "" + dd;
	var today = `${yy}${mm}${dd}`;
	console.log(today);
	xhr.open('GET', "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d878630a10fce1fad53e9b0cdaeb8a18&targetDt="+ today);
	xhr.send();

	xhr.onreadystatechange = function() {
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^^'); 
			console.log(this.response);
			// text file
			var getmovies = this.response; 
			var template = '';
			// text -> object 
			getmovies = JSON.parse(getmovies); 
			// json파일내에 있는 속성 results
			var movies = getmovies.boxOfficeResult.dailyBoxOfficeList; 
			// movies 반복 순환 처리
			for(var movie of movies) {
				template += [
					'<tr>',
						'<td class="rank">'+movie.rank+'</td>',
						'<td class="name">'+movie.movieNm+'</td>',
						'<td class="opendt">'+movie.openDt+'</td>',
						'<td class="audiacc">'+movie.audiAcc+'</td>',
						'<td class="rankinten">'+movie.rankInten+'</td>',
					'</tr>'
				].join('');
			}
		} else {
			console.log('통신 데이터 전송 실패');
		}
		result_view.innerHTML = template;
	}

})(this, this.XMLHttpRequest);