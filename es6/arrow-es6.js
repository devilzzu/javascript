// ES6
// Person class
class Person {
	// 생성자함수
	constructor(name){
		this.name = name;
	}
	// 메소드
	myFrineds(friends) {
		let arr = friends.map( el => `${el} is friends with ${this.name}` );
		console.log(arr);
	}
}

let friends = ['Chris', 'Jenny', 'Sunny'];

// 인스턴스 생성
const sharry = new Person('Sharry');
sharry.myFrineds(friends);