// jQuery 유틸리티 : 3자리 수마다 콤마 추가하기 
(function($){
	$.addComma = function(value){
		// value(숫자) -> 문자로 형변환 
		var data = String(value);
		// 배열로 만들기 
		var arrayData = data.split("");
		// 배열 요소 뒤에서 3자리
		var dotIndex = arrayData.length-3;
		// 3자리 마다 
		for(var i=dotIndex; i>0; i-=3){
			// i번째에 제거할 요소는 0개, ","를 삽입한다.
			arrayData.splice(i, 0, ",");
		}
		return arrayData.join("");
	}
})(jQuery);


$(document).ready(function(){
	$(".btn-num").on("click", function(){
		// input 값
		var $inputNum = $("#inputNum").val();

		// 위에서 만든 유틸리티 사용
		$resultNum = $.addComma($inputNum);
		
		// document.getElementById("resultNum").setAttribute('value', $resultNum);
		$("#resultNum").val($resultNum);
	});
});