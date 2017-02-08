// ES5
// Person class. 생성자함수
function Person(name) {
	this.name = name;
}
// Person의 메소드 
Person.prototype.myFrineds = function(friends) {
	// 2. 이렇게 Person 인스턴스 this를 담는 변수가 필요하다. 
	var that = this;
	var arr = friends.map(function(el) {
		// 1. 이 익명함수 내에서 this는 Person을 가리키지 않고 window 전역객체를 가리킨다. 따라서 원하는 결과가 안나온다. 
		// 1. return this.name + ' is friends with ' + el;
		// 2. 코드 리펙토링 
		return  el + ' is friend with ' + that.name;
	});

	console.log(arr);
}

var friends = ['Chris', 'Jenny', 'Sunny'];

new Person('Sharry').myFrineds(friends);