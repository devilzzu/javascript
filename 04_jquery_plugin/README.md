# JavaScript
완전정복 스터디 3권 - 웹동네 

## jQuery Plugin 제작 
클래스 단위 프로그래밍과 jQuery에서 제공하는 확장 기능을 활용해 jQuery 유틸리티와 플러그인을 제작하는 방법에 대해 알아보겠습니다. 

### jQuery 확장

jQuery확장에는 유틸리티와 플러그인 두가지가 있습니다. 
- 유틸리티 : 인스턴스를 생성하지 않고 직접 접근하여 사용하며 주로 도움을 주는 기능. 
 > $.유틸리티()  or <br>
 > jQuery.유틸리티()

- 플러그인 : 주로 노드를 다루는 특정 기능을 재사용할 때 사용하는 포장 기능으로 사용법은 주로 다음과 같이 jQuery 객체를 생성한 후 사용합니다. 
 > $('선택자').플러그인(옵션);  or  <br>
 > var $결과 = $('선택자'); <br>
 > $결과.플러그인(옵션);

- jQuery가 성공할 수 있었던 가장 큰 이유 중 하나는 수 없이 많은 플러그인 때문일 것입니다. 다른 개발자가 만들어 놓은 기능을 손쉽게 확장하여 사용할 수 있습니다.
- jQuery 플러그인을 제작할 때 자바스크립트 class를 활용해 봅니다.  

##### 자바스크립트 class방식 
```
var tab1 = new TabMenu("#tabMenu");
tab1.setSelectMenu(1);
```

##### jQuery 플러그인 방식
```
$("#tabMenu").setSelectMenu(1);
```

### jQuery 플러그인 만들기 

#### 구조 
```
(function($){
	$.fn.플러그인이름 = function(속성값){		// $ = jQuery, fn = prototype
		this.each(function(index){
			// 기능 
		})
		return this;
	}
})(jQuery)
```

- 위의 구조를 보면 prototype방식 jQuery class의 메소드 인 것을 알 수 있습니다. 
- jquery의 each는 매개변수로 들어오는 함수를 반복해서 호출해줍니다. 
- return this를 해준 이유는 만든 플러그인과 다른 메서드를 체인구조로 호출할 수 있게 하기 위해서입니다.  
 - $(선택자).만든플러그인().다른jquery메서드();
 - $(선택자).만든플러그인() 결과 값이 return this.. this는 jquery 인스턴스이기 때문에 메서드를 호출할 수 있습니다.

 ### 함수기반 플러그인 만들기 
 플러그인 구현 코드를 each()메서드의 배개변수 값으로 넘기는 함수내부에 작성하는 구조로 가장 일반적인 방법입니다. 
 ```
 (function($){
	$.fn.플러그인이름 = function(속성값){	
		this.each(function(index){
			var 변수1;
			...
			function 함수1(){
			}
			...
		})
		return this;
	}
})(jQuery)
 ```