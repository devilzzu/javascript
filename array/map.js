/* Plucking Values 값 뽑아내기 

Using map, create a new array that contains the 'height' property of each object.  
map을 사용하여 각 객체의 height프로퍼티를 포함하는 새로운 배열을 만든다. 
Assign this new array to the variable 'heights'.  
이 새로운 배열을 변수 heights에 할당하라. 
Don't forget to use the 'return' keyword in the function!
함수에서 return키워드를 사용하라. 
*/

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map((h) => {
	return h.height;
});

console.log(heights);
