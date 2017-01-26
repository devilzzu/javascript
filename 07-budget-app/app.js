// data를 다루는 모듈
var budgetController = (function() {

  // 생성자 함수 만들기 
  // 생성자함수는 대문자로 시작하도록한다. 
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }; 

  // Data를 관리하는 객체
  var data = {
    // 많은 수입, 지출이 들어온다면, 데이터구조는 배열이 좋겠다. 
    allItems: {
      inc: [],
      exp: [];
    }, 
    totals: {
      inc: 0,
      exp: 0
    }
  };

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
  };

})();

// data와 UI를 같이 다루는 모듈 (Global App)
var controller = (function(budgetCtrl, UICtrl) {

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

  var ctrlAddItem = function() {
    // 버튼을 클릭했을 때나 Enter키를 눌렀을 때 to-do list 
    // 1. get input data 
    var input = UICtrl.getInput();
    console.log(input);
    // 2. budgetController에 data추가 
    // 3. 아래 UI에 추가 
    // 4. 예산 계산 
    // 5. 계산된 것을 상단 UI에 보이게 하기
  };

  return {
    init: function() {
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();