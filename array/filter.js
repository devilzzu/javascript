/* Filtering Values

Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  
filter를 사용하여 50보다 큰 숫자만 포함하는 새로운 배열을 만들어라. 
Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
*/

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(num) {
	return num > 50;
});

filteredNumbers;