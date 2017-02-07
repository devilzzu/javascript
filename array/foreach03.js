/*
Processing Values
The array below contains an array of objects, each of which is a representation of an image.  
Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  
The area of an image can be calculated as 'image.height * image.width'.
각 image 영역을 계산하고 이를 'areas'라는 새로운 배열에 저장합니다. 이미지 영역은 'image.height * image.width'로 계산할 수 있습니다.
*/

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

function imgErea(img) {
	areas.push(img.height * img.width);
	console.log(areas);
}

images.forEach(imgErea);