/* Challenging! Implementing 'reject'.
'reject(거부)' 구현하기 

This is a hard one!  Create a function called 'reject'.  
Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  
filter의 반대로 작동해야합니다. 즉, 함수가 true를 반환하면 새 배열에 포함하지 않아야 합니다. 
Hint: you can reuse filter. 힌트: 필터를 재사용할 수 있습니다. 


For example:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];
*/


var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter(function(item) {
    return !iteratorFunction(item);
  });
}

var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});

lessThanFifteen;