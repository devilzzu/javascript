# JavaScript
완전정복 스터디 3권 - 웹동네 

## jQuery Utility 제작 
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

### jQuery 유틸리티 만들기 

- jQuery.trim() 문자열의 앞 뒤 공객을 없애주는 메서드와 같이 주로 도움을 주는 기능을 합니다. 
- [jQuery에서 기본으로 제공하는 유틸리티 바로가기](http://api.jquery.com/category/utilities/)

- jQuery 인스턴스를 생성하지 않고 직접 접근하여 사용합니다.

- 유틸리티 정의 
```
(function($){
	$.유틸리티 = function() {
			// 기능구현
	}
})(jQuery);
```

- 유틸리티 사용
```
$.유틸리티함수();
jquery.유틸리티함수();
```

#### 실습 : 3자리수마다 콤마를 추가하는 유틸리티 만들기 

##### slice 메서드 
- ` arrayObj.splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])` 

- start : 필수 요소.배열에서 요소를 제거할 위치이며 0부터 시작하는 위치입니다.
- deleteCount : 필수 요소.제거할 요소의 수입니다.
- item1, item2,. . ., itemN : 선택 사항입니다.삭제된 요소 대신 배열에 삽입할 요소입니다.