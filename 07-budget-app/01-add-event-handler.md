## [예산관리 웹애플리케이션 - 01. 설계하기](https://sharryhong.github.io/2017/01/22/portfolio-budget-app/)

## to-do list 01) Add event handler 
이벤트리스너 set up, 이벤트 객체를 사용하는 방법 등 

#### 버튼을 클릭했을 때나 엔터키를 눌렀을 때의 to-do list를 적어보자. 

1. get input data 
2. budgetController에 data추가 
3. 하단 UI에 추가 
4. 예산 계산 
5. 계산된 것을 상단 UI에 보이게 하기 

[Event reference-MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

**keydown 이벤트**는 특정 요소에 발생되는 것이 아니라 global document에서 발생합니다.
```
document.addEventListener('keypress', function(evt) {
  console.log(evt);
});
``` 

콘솔에서 keypress에 해당하는 prototype chain을 보면 상위 UIEvent, 상위 Object에 속해있다는 것을 알 수 있습니다. 
keypress의 keyCode 프로퍼티를 사용하여 누른 키가 Enter키일 때 실행되게 해봅시다. 
Enter키의 keyCode = 13 

<keycodes.atjayjo.com>에서 쉽게 keyCode를 알 수 있습니다. 

```
document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
document.addEventListener('keypress', function(evt) {
  if (evt.keyCode === 13) {
    ctrlAddItem();
  }
});
```

### 1. get input data 
UI에서 입력 받는 것이므로 UIController 에서 작성합니다. 
또한 controller에서 사용할 것이므로 public으로 공개합니다. 
logic은 항상 같습니다. 먼저 어떤것을 선택한 뒤, 선택한 것으로 무언가를 하는 것입니다. 

입력받을 3개의 값 : 1) +, - , 2) Add description 3) Value


1) HTML에서 
```
<select class="add__type">
    <option value="income" selected>+</option>
    <option value="expense">-</option>
</select>
```

```
return {
  getInput: function() {
    var type = document.querySelector('.add__type').value;
    var description = document.querySelector('.add__description').value;
    var value = document.querySelector('.add__value').value;
  }
}
```
위처럼 작성해도 되지만 세 값을 모두 return해야하는데, 객체의 프로퍼티로 지정하여 객체 하나만 불러오는 방법이 더 깔끔합니다. 

코드 리펙토링
```
return {
  getInput: function() {
    return {
      type: document.querySelector('.add__type').value,
      description: document.querySelector('.add__description').value,
      value: document.querySelector('.add__value').value
    };
  }
}
```

##### 여기서 고민! querySelector('.classname')으로 설정하였는데, 나중에 UI가 변하거나 classname이 바뀐다면?

한 객체에 프로퍼티 값으로 저장하여 사용하면 유지보수에 좋겠다! 

DOM은 UI에 관련된 것이므로 UIController에서
```
// DOM선택은 모두 여기서 관리하도록 한다. 
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
  };
```

그리고 기존의 `type: document.querySelector('.add__type').value`를 
`type: document.querySelector(DOMstrings.inputType).value` 이렇게 관리하면 유지보수에 좋겠군!

그리고 controller에서도 DOM이 필요하다. 관리는 UIController에서 한다면, 
```
return {
  // DOMstrings 프로퍼티를 다른 모듈에서 사용가능하도록 
  getDOMstrings: function() {
    return DOMstrings;
  }
}
```

controller에서 위에서 공개한 것을 변수에 넣고, 필요한 부분에서 객체.프로퍼티로 불러들인다. 
물론 DOMstrings객체에 inputBtn 프로퍼티를 추가하였다. 
```
var DOM = UICtrl.getDOMstrings();

document.querySelector(DOM.inputBtn);
```
