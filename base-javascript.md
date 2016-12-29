# JavaScript
코드카데미 자바스크립트 공부 중 (기초)

## What can we use JavaScript for?

- make websites respond to user interaction.<br><br>
사용자 상호작용에 응답하는 웹사이트 만들기 

- build apps and games (e.g. blackjack)<br><br>
앱과 게임 개발 

- access information on the Internet (e.g. find out the top trending words on Twitter by topic)<br><br>
인터넷에서 정보 엑세스 

- organize and present data (e.g. automate spreadsheet work; data visualization)<br><br>
(예: 스프레드 시트 작업 자동화, 데이터 시각화)

### Math 내장함수 맛보기

- `Math.random()` : This code will return a random number between 0 and 1.<br>
Math.random()을 이용하여 0 ~ 100 사이 정수 구하기 

```
var randomNumber = Math.floor(Math.random() * 100);
```
### Function 함수

- A function is a block of code designed to perform a task.<br><br>
함수는 작업을 수행하기 위해 설계된 코드 블록이다.

- Functions are like recipes. They take data or variables, perform a set of tasks on them, and then return the result.<br><br>
기능 조리법과 같다. 데이터나 변수를 가지고 그들에 일련의 작업을 수행 한 후 결과를 반환한다.

- For instance, to make ice cream, you can put sugar, cream, and ice into an ice cream machine, and it will output delicious ice cream. The stuff that happens in the middle (where the ingredients are operated on) – that's what functions do. They take inputs, operate on them, then output a result.<br><br>
함수는 입력을 받아 작동시키고 그 결과를 출력한다.

```
function makePizza(topping, crustType){
  console.log('Pizza\'s done. Let\'s eat!'+topping+crustType);
}

makePizza('cheese','thin crust');
```

```
var makePizza = function (topping, crustType){
   return 'Pizza\'s done. Let\'s eat!'+ topping + crustType;
}

var customPizza = makePizza('cheese','thin crust');

console.log(customPizza);
```

### Scope 범위

- Scope refers to where in a program a variable can be accessed.<br><br>
스코프는 프로그램의 변수가 액세스 될 수있는 위치를 지칭한다. 

- If you write a variable outside of a function in JavaScript, it's in the *global scope* and can be used by any other part of the program, just like the laundry room can be used by everyone in an apartment.<br><br>
만약 변수가 함수 외부에서 선언되면, 글로벌 스코프로서 프로그램의 어느 파트에서나 사용될 수 있다. 

- When we write variables inside a function, only that function has access to its own variables. Therefore, they are in the *functional scope*.<br><br>
변수를 함수 내부에서 선언하면, 오직 그 함수에서만 변수를 엑세스 할 수 있다. 그것을 함수 스코프라고 한다. 

- In addition to a function having access to its own variables, it also has access to variables in the global scope.<br><br>
그리고 전역 변수에 대한 액세스도 할 수 있다.

### Arrays 배열 

#### 내장 프로퍼티 `.length`

```
var bucketList = ['travelling with my family', 'making a useful web app', 'travelling in NZ'];

console.log(bucketList.length);
```

#### push() 메소드 

- push() allows us to add items to the end of an array. <br><br>
배열의 끝에 아이템을 추가 할 수 있다. 

#### pop() 메소드 

- 끝에 있는 아이템을 하나 제거한다. 

```
var bucketList = ['travelling with my family', 'making a useful web app', 'travelling in NZ'];
bucketList.push('learning a drum', 'meeting my old friends');
bucketList.pop();
console.log(bucketList.length); // 4
console.log(bucketList);
```

### Loops 반복문 

1. `for` loops, which let us loop a block of code a known amount of times.<br><br>
for 반복문은 몇 번 반복할 것인지 알 때 사용한다. 

1. `while` loops, which let us loop a block of code an unkown amount of times.<br><br>
while 반복문은 몇 번 반복할 것인지 모를 때 사용한다. 

```
var vacationSpots = ['seoul','puket','auckland'];

for (var i = 0; i < vacationSpots.length; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
```

```
var vacationSpots = ['seoul','puket','auckland'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
```

- 랜덤으로 카드 뒤집기 게임. Spade가 나올 때 까지 

```
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  var randomNumber = Math.floor(Math.random() * 4);
  currentCard = cards[randomNumber];
}
```

### Substrings 부분열 

- `"some word".substring(x, y)` <br><br>
string의 첫글자부터 0, x자리부터, y자리 전까지 부분열 뽑아내기 

예 : `"wonderful day".substring(3, 7);` // 결과 : `"derf"`