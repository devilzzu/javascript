// budget(예산) data 관련 모듈
var budgetController = (function() {



})();

// UI관련 모듈
var uiController = (function() {

  return {
    getInput: function() {
      return {
        type: document.querySelector('.add__type').value, // income, expense
        description: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value
      };
    }
  };

})();

// Global App 모듈 
var controller = (function(budgetCtrl, uiCtrl) {

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

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, uiController);