###### Front-End Develop SCHOOL

# DAY 41

#### AJAX 비동기 통신 기술 

- Asynchronous Javascript And XML : js, xml을 만나면서 비동기통신을 한다. 
- 자바스크립트 객체를 사용하여 비동기를 할 수 있게 한다. 생성자, 즉 함수가 new를 만나서 객체를 생성하는데, 이 것이 비동기를 할 수 있게 해준다. 
- 자바스크립트 객체가 특정 데이터(업데이트 등할 데이터)를 서버에 주고받고 하여 그 부분만 업데이트.
- XML은 자유롭게 마음대로 정할 수 있다. (단점 : 무겁다. 구조화가 어렵다. -> 해결위해 JSON 등장)
- 요새는 JSON으로 하지만 이름은 그냥 AJAX라고 한다. 
- 비동기 통신 : view가 update 동안에도(data 변경 등) 사용자는 다른 일을 할 수가 있다. 
- 필요한 부분만 별도로 요청, 응답받아 처리한다. 모든데이터를 업데이트할 필요없이 불필요한 대역폭 감소가 가능, 비용절감을 가져온다. 
- 장점 : 속도, 비용 절감 
- 단점 : 접근성에는 열악하다. 
 - 해결하기 위해 등장 : aria 

##### 비동기 통신을 할 수 있는데 사용할 수 있는 것 
- Text
- HTML
- XML
- JSON : 자바스크립트 객체. ajax형태로 받은 문자를 객체로, 객체를 문자로 바꿀 수 있는 능력을 가지고 있다. 


##### 라이브러리와 프레임 워크 
- jQuery는 DOM제어에 최적화 되어있는 것이다. : jQuery는 라이브러리. 돔제어와 ajax정도만 제공한다.
- Framework : 애플리케이션에 필요한 것 모두 제공. 정해져있는대로 사용해야 한다. angularJS는 프레임워크

##### ajax 기술 
- XHR (XML Http Request) : ajax비동기 통신을 하기 위한 생성자를 통해 객체를 만든다. 따라서 여러개를 만들어 동시다발적으로 수행시킬 수 있다. 
- ajax는 xhr 객체를 필요로한다. 
- 서버필요. 우리는 로컬서버, 호스팅 필요

- 로컬서버연결 : gitbash에서 http-server -o -a localhost -p 8081
 - npm list -g http-server 우선 설치되어 있어야 한다. (서버설치)

- IE6에서는 XMLHttpRequest 지원안함. 


##### 실습
- txt
- html
- xml : 선택하기 힘들다. -> 복잡. 요새 잘 쓴다. querySelector는 가능
- json : 객체이므로 선택이 쉽다. 반드시 쌍따옴표 쓴다. []배열이나 {}객체

- json파일 만들어보자. 
1. <https://randomuser.me/documentation> 랜덤유저 데이터 받기
2. gitbash(터미널)에서 curl http://api.randomuser.me/\?results\=20 > data.json 하면 


##### jQuery Ajax
- jQuery.getJSON(url)


### AngularJS
- <https://docs.angularjs.org/api> 
- 왜 쓰는가? SPA(Single Page Applications)제작 Framework 
- google의 후광에 힘입은 강력한 마케팅으로 2012년 이후 가파르게 급성장

- 라우터기능 : 히스토리 보존되어 있어 뒤로가기 버튼 누르면 이전 view보여줌

- 앵귤러 + 아이오닉 = 하이브리드 웹앱 만들기 가능! 

- SPA(Single Page Applications) 구현 위한 다양한 기술 : 이런것들을 앵귤러가 지원해준다. 
 - DOM 조작
 - 히스토리(기록, History)
 - 라우팅(절차)
 - 비동기 통신(Ajax)
 - 데이터 연결(Data Binding)
 - 등등 

- 앵귤러 사용 사이트 : 잔디 
- 페이지의 한부분을 앵귤러로 만들어 사용해도 좋다. 
- 앵귤러, 리엑트, 제이쿼리 등 필요한 것들을 함께 사용하기도 한다. 
- 속도가 상대적으로 느릴 수 있다. -> 리엑트(라이브러리)는 빠르나.. 전체 지원을 안하므로.. 

- AngularJS1 = JavaScript로 됨
- AngularJS2 = MS(TypeScript : c#과 비슷)와 손잡음

- 화려한 UI를 하려면 jQuery등이 좋다. 앵귤러는 애플리케이션 개발 프레인워크인 것이다.

- 앵귤러 선호 이유
 - 코드 일관성 유지
 - MVC 구조 (객체지향)
 - 코드양 감소 (힘든 일을 앵귤러가 해준다.)
 - 코드 재사용
 - 양방향 데이터 바인딩 (잘못쓰면 느려지는 원인)
 - 다양한 모듈 확장 

##### 시작
- local / CDN / [npm (nodeJS 통해)](https://bower.io/) 중에 고르기

-

#### 그 외 추천
- DOM을 깨우치다. 책 (코디 린들리)
- 테스트 위한 데이터 만들어 사용하기 <http://generatedata.com/>
- <http://uifaces.com/>
- <https://randomuser.me/>
- [react 무료 한국분 강의](https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)