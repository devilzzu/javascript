// ES5
// Person class. 생성자함수
function Person(name) {
	this.name = name;
}
// Person의 메소드 
Person.prototype.myFrineds = function(friends) {

	// 이번엔 this를 변수에 담는 방법말고, bind, call, apply메소드를 사용하여 보자. 
	var arr = friends.map(function(el) {
		return  el + ' is friend with ' + this.name;
	}.bind(this)); // map안의 익명함수 안에서 this는 전역객체에 바인딩되지만, 바깥의 this는 Person의 인스턴스인 것을 활용한 예이다. 

	console.log(arr);
}

var friends = ['Chris', 'Jenny', 'Sunny'];

new Person('Sharry').myFrineds(friends);