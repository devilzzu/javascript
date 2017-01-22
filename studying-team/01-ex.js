'use strict';

//******* 주로 성능이슈 

// 1. 
// 문제가 있는 함수
// 같은 것이 있나 duplicateCheck함수로 돌려보고 없으면(false) 실행하도록 하는데
// 없을 경우 실행할 코드가 없다? 이 경우 어떻게 되는가? -> 소스의 일부분이다. 
function addList(actionType, todoORnumber) {
    if(duplicateCheck(actionType, todoORnumber)){
        var parentBasketNode = document.querySelector(".basket > ol");
        var newNode = document.createElement("li");
        parentBasketNode.appendChild(newNode).textContent = todoORnumber;
        newNode.insertAdjacentHTML("beforeend","<button>X</button>");
        removeBtn();
        sortString();
    }
}

// 문제를 해결한 함수 
// 아닐 경우 빠져나가게 하는 걸 먼저 쓰면 성능에 더 좋다! => "핵심" 
// if else보다 이런 소스가 더 성능에 좋은 것이다. 
function addList(actionType, todoORnumber) {
    if( !duplicateCheck(actionType, todoORnumber )){  return; }
    var parentBasketNode = document.querySelector(".basket > ol");
    var newNode = document.createElement("li");
    parentBasketNode.appendChild(newNode).textContent = todoORnumber;
    newNode.insertAdjacentHTML("beforeend","<button>X</button>");
    removeBtn();
    sortString();
    
}

// 문제가 있는 함수
// 클릭한 요소가 button이 아닌경우에도 liTarget변수 할당됨 
var basketOl = document.querySelector(".basket ol");
basketOl.addEventListener("click", function(event){
  var evtTarget = event.target;
  var liTarget = evtTarget.parentNode;

  if(event.target.tagName !== "BUTTON"){ return; }
  else{ liTarget.parentNode.removeChild(liTarget); }
});

// 문제를 해결한 함수 
var basketOl = document.querySelector(".basket ol");
basketOl.addEventListener("click", function(event){
  var evtTarget = event.target;

  if( event.target.tagName !== "BUTTON" ){ return; }
  var liTarget = evtTarget.parentNode; 
      liTarget.parentNode.removeChild(liTarget);
});

////////////////////////////////////////////////////////////////////////

// 2.
mainTextarea.addEventListener("focusout",function(evt){
	var mainArea = evt.target;
	
	if(mainArea.tagName !== "TEXTAREA") return false;

	mainTextarea.setAttribute("style","background-color:white");
	//새로 만든 능을 / 삭제
	mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
	mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
	//입력한 글자값 삭제
	mainTextarea.value = "";
	//기존에 있던 버튼을 화면에 표시
	var deleteButton = mainTextarea.nextElementSibling.nextElementSibling;
	console.log(deleteButton);
	//deleteButton.previousElementSibling.setAttribute("style","display:block");
	deleteButton.previousElementSibling.style.display = "block";
	deleteButton.style.display = "";
	deleteButton.nextElementSibling.style.display = "";
});

// 변수 할당하지 않았다. 
// 이렇게 할 경우 html inline으로 들어간다. 
// setAttribute class를 넣었다 뺐다 할 수 있다. 
black_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "black";
});
white_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "#e9ebee";
});

// 코드 리펙토링 1
function addText(evt){
  var mainArea = evt.target;
  
  if(mainArea.tagName !== "TEXTAREA") return false;

  mainTextarea.setAttribute("style","background-color:white");
  //새로 만든 능을 / 삭제
  mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
  mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
  //입력한 글자값 삭제
  mainTextarea.value = "";
  //기존에 있던 버튼을 화면에 표시
  var deleteButton = mainTextarea.nextElementSibling.nextElementSibling;
  console.log(deleteButton);
  //deleteButton.previousElementSibling.setAttribute("style","display:block");
  deleteButton.previousElementSibling.style.display = "block";
  deleteButton.style.display = "";
  deleteButton.nextElementSibling.style.display = "";
}
// 이벤트와 함수 분리(콜백 함수로 하지않고) : 직관적 
mainTextarea.addEventListener("focusout", addText);

// 코드 리펙토링 2
var addHandler = {
  'addText' = function() {
    // 함수 코드
  },
  'addNode' = function() {
    // 함수 코드
  },
  'addSomething' = function() {
    // 함수 코드
  },
}

mainTextarea.addEventListener("focusout", addHandler.addText);

////////////////////////////////////////////////////////////////////////

// 3. To Do List 설계 
 *** [To Do List] 해야할 것
 * (진행중)event관련 코드 학습 및 설명자료 작성
 * (완료)JS 코드의 기능을 확인 한다.
 * (완료)html 코드를 확인한다.
 * (완료)css 코드를 확인한다.
 * (완료)버튼 클릭시 html코드에 append 하도록 한다.
 * (완료)버튼 클릭시 html코드에 remove 하도록 한다.
 * (완료)엘리먼트 create 펑션 만들기
 * (완료)엘리먼트 셀렉트 펑션 만들기
 * (완료)"input"값을 조작하는 방법 조회
 * (완료)버튼을 누른다.
 * (완료)새로운 Element 생성
 * (완료)newElement.innerText = input.value
 * (완료)node.appendChild(newElement)
 * (완료)append 펑션을 넣어서 값을 넣기
 * 
 * 다시 문제를 디자인 한다.
 * add는 문자로 받는다. 
 * remove는 숫자로 받는다.
 * 문자열 길이 내림차순 정열(실시간)
 * (예외처리) 삭제시 해당 번호가 없으면 "'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다."
    -- setTimeout을 이용하여서 3초 동안 표시하도록 한다.
 * (예외처리) 추가시 해당 메세지가 있다면 "message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다."
    -- setTimeout을 이용하여서 3초 동안 표시하도록 한다.
 * setTimeout 적용
 * string 조작
 * regularexpression 확인
 */
