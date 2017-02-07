// 1. create an array of numbers
var numbers = [1,2,3,4,5];

// 2. create a variable to hold the sum
var sum = 0;

// 3. loop over the array, incrementing the sum variable
// numbers.forEach(function(num){
// 	sum += num;
// });
function adder(number){
	sum += number;
}

numbers.forEach(adder);

// 4. print the sum variable
console.log(sum);