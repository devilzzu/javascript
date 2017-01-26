// data를 다루는 모듈
var budgetController = (function() {



})();

// UI를 다루는 모듈 
var UIController = (function() {
  // DOM선택은 모두 여기서 관리하도록 한다. 
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    // DOMstrings 프로퍼티를 다른 모듈에서 사용가능하도록 
    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();

// data와 UI를 같이 다루는 모듈 (Global App)
var controller = (function(budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {
    // 버튼을 클릭했을 때나 Enter키를 눌렀을 때 to-do list 
    // 1. get input data 
    var input = UICtrl.getInput();
    console.log(input);
    // 2. budgetController에 data추가 
    // 3. 아래 UI에 추가 
    // 4. 예산 계산 
    // 5. 계산된 것을 상단 UI에 보이게 하기
  }

  var budgetBtn = document.querySelector(DOM.inputBtn);

  budgetBtn.addEventListener('click', ctrlAddItem);

  // keydown이벤트는 특정 요소에 발생되는 것이 아니라 global document에서 발생한다.
  document.addEventListener('keypress', function(evt) {
    if (evt.keyCode === 13) {
      ctrlAddItem();
    }
  }); 

})(budgetController, UIController);