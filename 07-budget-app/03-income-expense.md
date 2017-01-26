## income(수입), expense(지출) data를 budgetController에 저장하기 

- 이 애플리케이션의 요구를 충족시키는 생성자함수를 만드는 방법
- budgetController에 적잘한 데이터구조를 설정하는 방법 

수입과 지출을 위한 데이터 모델이 필요하다. 
전에 설정한대로 각 item은 description과 value, id 이 것을 객체에 저장해보자.

많은 객체를 생성하기 위해 좋은 방법은 생성자함수를 만드는 것이다. 
많은 수입과 지출 객체를 인스턴스화하는데 사용할 수 있다. 
전에 공부했던 prototype class
```
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
```

budgetController에서 모든 수입과 지출을 기록한다. 
나중에 퍼센트 관련해서도 추가해야하기 때문에 좋은 데이터 구조가 필요하다. 
만약 많은 수입, 지출이 들어온다면.. 어떤 데이터구조를 쓰면 좋을까? 
Array! 
```
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
```

## budgetController에 new item 추가하기 

- 데이터구조에서 충돌을 피해보자. 
- 데이터를 한 모듈에서 다른 모듈로 전달하기 