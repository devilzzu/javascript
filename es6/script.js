let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' '+ lastName +'. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const fullName = `${firstName} ${lastName}`;

console.log(fullName.startsWith('J')); 	// true
console.log(fullName.endsWith('th'));	// true
console.log(fullName.includes(' '));	// true
console.log(fullName.repeat(3));	// John SmithJohn SmithJohn Smith
console.log(`${fullName}, `.repeat(3));	// John Smith, John Smith, John Smith, 
