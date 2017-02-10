// ex01)
// a = [1, 2, 3];
// b = a; 
// a.push(4);
// console.log(b); 

// 답 : [1,2,3,4]


// ex02)
// a = [1, 2, 3];
// b = a; 
// a.push(4);
// a = [5, 6, 7];
// b.push(5);
// console.log(a); 
// console.log(b); 
// 답 a : [5,6,7]
// 답 b : [1,2,3,4,5]

// ex03)
function foo(arr) {
    arr.push('foo');
    arr = [4, 5, 6];
    arr.push('bar');
    console.log(arr);
}

var a = [1, 2, 3];
foo(a); // 예상 : [4,5,6,bar]
console.log(a); // 예상 : [4,5,6,bar] => 답 : [1,2,3,foo] 써보면 알 수 있다. 