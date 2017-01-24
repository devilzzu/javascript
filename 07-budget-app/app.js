// data를 다루는 모듈
var budgetController = (function() {



})();

// UI를 다루는 모듈 
var UIController = (function() {

  // controller에서 쓸 메소드이므로 public으로 공개한다. 
  // return {
  //   // 세 값을 모두 return 해야하는데, 아래처럼 메소드내에서 변수 선언을 한 것보다는,
  //   // 객체의 프로퍼티로 지정하여 객체 하나만 불러오는 방법이 더 좋다. 
  //   getInput: function() {
  //     // 로직은 항상 같다. 1. select something 2. do something with the selection
  //     // select요소에서 +, - option을 선택할 때. 기존에 적은 income, expense가 들어간다.
  //     var type = document.querySelector('.add__type').value;
  //     var description = document.querySelector('.add__description').value;
  //     var value = document.querySelector('.add__value').value;
  //   }
  // }

  return {
    getInput: function() {
      return {
        type: document.querySelector('.add__type').value,
        description: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value
      };
    }
  }

})();

// data와 UI를 같이 다루는 모듈 (Global App)
var controller = (function(budgetCtrl, UICtrl) {

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

  var budgetBtn = document.querySelector('.add__btn');

  budgetBtn.addEventListener('click', ctrlAddItem);

  // keydown이벤트는 특정 요소에 발생되는 것이 아니라 global document에서 발생한다.
  document.addEventListener('keypress', function(evt) {
    if (evt.keyCode === 13) {
      ctrlAddItem();
    }
  }); 

})(budgetController, UIController);