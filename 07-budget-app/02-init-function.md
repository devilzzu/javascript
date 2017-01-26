## initialization function (초기화 함수)

> 지금까지 controller상의 코드를 보면 Eventlistener부분이 따로 흩어져있다. 
추후에 계속 기능 등이 추가될텐데.. 각 부분을 함께 관리하고, 초기화 함수로 실행해보도록 하자. 

```
// 이벤트 리스너에 관련한 것들을 묶어준다. 
var setupEventListeners = function() {
  var DOM = UICtrl.getDOMstrings();

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  // keydown이벤트는 특정 요소에 발생되는 것이 아니라 global document에서 발생한다.
  document.addEventListener('keypress', function(evt) {
    if (evt.keyCode === 13) {
      ctrlAddItem();
    }
  }); 
};
```

실행되게 하기 위해 가장 일반적인 방법은 init이라고 부르는 public 초기화 함수를 만드는 것 

controller에서 
```
return {
  init: function() {
    setupEventListeners();
  }
};
```

controller 밖에서 
```
controller.init();
```