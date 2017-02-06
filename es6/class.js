// ES5
// 생성자 함수
var Person = function(name, yearofBirth, job) {
	this.name = name;
	this.yearofBirth = yearofBirth;
	this.job = job;
}
// 메소드
Person.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearofBirth;
	console.log(age);
	// return age;
}
// 인스턴스
var john = new Person('John', 1980, 'teacher');
john.calculateAge();

// subClass 
var Athlete = function(name, yearofBirth, job, olympics, medals) {
	Person.call(this, name, yearofBirth, job);
	this.olympics = olympics;
	this.medals = medals;
}
// 상속 구현
Athlete.prototype = Object.create(Person.prototype);
// Athlete.prototype = new Person;
// 인스턴스 
var johnAthlete = new Athlete('John', 1980, 'swimmer', 3, 10);
// 메소드
Athlete.prototype.wonMedal = function() {
	this.medals++;
	console.log(this.medals);
}
// 상위클래스의 메소드 사용
johnAthlete.calculateAge();
johnAthlete.wonMedal();