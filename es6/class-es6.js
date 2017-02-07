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
//john.greeting(); // error

class Athlete extends Person {
	constructor(name, yearofBirth, job, olympics, medals) {
		// call the superclass. 부모의 생성자 호출
		super(name, yearofBirth, job);
		this.olympics = olympics;
		this.medals = medals;
	}

	wonMedal() {
		this.medals++;
		console.log(this.medals);
	}
}

let johnAthlete = new Athlete('John', 1980, 'swimmer', 3, 10);
johnAthlete.calculateAge();
johnAthlete.wonMedal();