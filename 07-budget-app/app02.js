// budget(예산) data 관련 모듈
var budgetController = (function() {



})();

// UI관련 모듈
var uiController = (function() {

  // class 객체로 관리 
  var domStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(domStrings.inputType).value, // income, expense
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value
      };
    },
    getDomStrings: function() {
      return domStrings;
    }
  };

})();

// Global App 모듈 
var controller = (function(budgetCtrl, uiCtrl) {

  var dom = uiCtrl.getDomStrings();

  // 1. +, 1, description, value 세가지 input data를 적고 
  // button or enter key를 누르면 실행되는 event 
  var ctrlAddItem = function() {
    // 1) input data를 가져온다. 
    var input = uiCtrl.getInput();
    console.log(input);
    // 2) budgetController에 new item 추가 
    // 3) UI에 new item 추가
    // 4) budge 계산
    // 5) 상단 UI에 budge display
  };

  document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, uiController);