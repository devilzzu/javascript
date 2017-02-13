/* Really Hard - Implementing 'Pluck'
정말로 어려운 - '뽑기'' 구현하기 

This is a hard one!
Implement a 'pluck' function.  
Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
Pluck은 배열과 프로퍼티 이름을 나타내는 문자열을 받아들여 각 객체에서 프로퍼티를 포함하는 배열을 return해야합니다. 
*/

//Example: 

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];


function pluck(array, property) {

  var proValue = array.map( (obj) => {
    return obj[property];
  });

  return proValue;
}

pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
