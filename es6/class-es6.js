// Person 클래스 
class Person {
	// 생성자함수
	constructor (name, yearofBirth, job) {
		this.name = name;
		this.yearofBirth = yearofBirth;
		this.job = job;
	}
	// 메소드
	calculateAge() {
		let age = new Date().getFullYear() - this.yearofBirth;
		console.log(age);
	}

	// static 메소드 : 클래스 인스턴스에 의해 상속되지 않는다. 
	static greeting() {
		console.log('hi!');
	}
}

// 클래스 인스턴스 
let john = new Person('John', 1980, 'teacher');
john.calculateAge();

Person.greeting(); // 'hi!'
john.greeting(); // error