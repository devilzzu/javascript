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
	xhr.open('GET', './data/movie.json');
	// api : github gh-pages에서는 불러와지지 않는다. 
	// xhr.open('GET', "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d878630a10fce1fad53e9b0cdaeb8a18&targetDt=20161229");
	// xhr.open('GET', "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d878630a10fce1fad53e9b0cdaeb8a18&targetDt="+ today);
	xhr.send();

	xhr.onreadystatechange = function() {
		if ( this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! ^^'); 
			// console.log(this.response);
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
					'<li class="movie-contents">',
						'<strong class="rank">'+'No.'+movie.rank+'</strong>',
						'<h3 class="name">'+movie.movieNm+'</h3>',
						'<p class="opendt small">'+'개봉일 : '+'<span>'+movie.openDt+'</span>'+'</p>',
						'<p class="audiacc small">'+'누적 관객 수 : '+'<span>'+movie.audiAcc+'</span>'+'명'+'</p>',
						'<p class="rankinten small">'+'순위 변화 : '+'<span class="rank-change">'+movie.rankInten+'</span>'+'</p>',
					'</li>'
				].join('');
			}
		} else {
			console.log('통신 데이터 전송 실패');
		}
		result_view.innerHTML = template;

		// 랭킹 3위부터 회색배경 
		var rank_array = document.querySelectorAll('.rank');
		var gray_array = Array.prototype.slice.apply(rank_array);
		var gray_rank = gray_array.slice(3);
		for(var i=0; i<gray_rank.length; i++){
			gray_rank[i].classList.add('gray');
		}
		// 순위변경 표시하기
		var rankinten_array = document.querySelectorAll('.rank-change');
		for(var a=0; a<rankinten_array.length; a++){
			var rankinten_el = rankinten_array[a];
			var rankinten_el_first = rankinten_el.firstChild;
			// console.log(rankinten_el_first.nodeValue);
			// 순위변경이 없다면 숫자 0을 없애고 css에 적용한 zero클래스 붙이기
			if(rankinten_el_first.nodeValue == 0){
				rankinten_el_first.nodeValue = '';
				rankinten_el.classList.add('zero');
			}
			// 순위가 올랐다면 css에 적용한 up클래스 붙이기
			else if(rankinten_el_first.nodeValue > 0){
				rankinten_el.classList.add('up');
			}
			// 순위가 내려갔다면 css에 적용한 down클래스 붙이기, 마이너스 없애기
			else if(rankinten_el_first.nodeValue < 0){
				// console.log(rankinten_el_first.nodeValue[0]);
				var el_value = rankinten_el_first.nodeValue;
				var result = el_value.slice(1)+el_value.slice(2, el_value.length);
				// console.log(result);
				rankinten_el_first.nodeValue = result;
				rankinten_el.classList.add('down');
			}
		}
	}

})(this, this.XMLHttpRequest);