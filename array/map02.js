/* Calculating Values with Map : map으로 값 계산하기 

Using map, create a new array that contains the distance / time value from each trip.  
map을 사용하여 각 trip에서 거리/시간 값이 포함된 새로운 배열을 만든다. 
In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
즉, 새로운 배열은 (거리/시간) 값을 포함해야 한다. 결과를 speeds 변수에 할당하시오.
*/

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map( (s) => {
  return s.distance / s.time;
});

console.log(speeds);