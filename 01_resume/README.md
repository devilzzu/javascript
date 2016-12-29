# JavaScript Basics
udacity 과정 

## 목표
- JSON 객체에 이력서 내용을 담고, 웹페이지에 보여주는 방식. 
- html 하드코딩 하지 않고 템플릿을 불러오는 방식을 쓴다. 


#### 내용이 없으면 각 파트가 보이지 않도록 설정한 코드 (display: none)

```
if(document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.display = 'none';
}
```

#### jQuery library를 사용해서 내용을 넣어보자. 

```
$("#main").append("Hong HS"); // id가 main인 요소에 첨부하기
```
#### String.Replace()

```
var email = "kshopzoa15@nate.com";
var newEmail = email.replace("nate", "gmail");

결과 
console.log(email);
VM651:1 kshopzoa15@nate.com
console.log(newEmail);
VM652:1 kshopzoa15@gmail.com
```

#### 실제 데이터로 바꾸기

- helper.js
```
var HTMLheaderName = '<h1 id="name">%data%</h1>';
```

- `%data%`는 실제 데이터로 바꾸기. replace()메소드, append() or prepend()사용  
```
var formattedName = HTMLheaderName.replace("%data", name);
$("#header").append(formattedName);
```

#### toUpperCase(), slice() 

- str.toUpperCase() : 대문자로 
- str.slice(beginSlice[, endSlice]), arr.slice([begin[, end]]) : 문자, 배열에서 어느 부분을 복사하여 리턴할 것인가

- audacity -> Udacity로 바꿔보자. 
```
var s = "audacity";

var udacityizer = function(s) {  
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};
console.log(udacityizer(s));
```

#### Truthy vs Falsy

- Trythy : true, none-zero numbers, "string", objects, arrays, functions

- Falsy : false, 0, "", undefined, null, NaN

#### pop(), push()

- arr.pop() : 배열 마지막 값을 제거하고 값 반환
- arr.push(element1, ..., elementN) : 배열 마지막 값으로 추가하기  

- 배열 마지막 숫자에 +1을 하여 새 배열에 저장하기 
```
var sampleArray = [0,0,7];
var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0); // 기존 배열 값과 동일하게 [0,0,7]
    var lastNum = newArray.pop(); // 배열 마지막 값 7
    newArray.push(lastNum+1); // 7+1을 배열 마지막 값으로 
    return newArray;
};
console.log(incrementLastArrayElement(sampleArray));
```
#### split(), join()

- str.split([separator[, limit]]) : 문자를 separator 기준으로 나눠 배열로 만든다.
- str = arr.join([separator = ',']) : 배열의 요소를 문자열로 합한다. 

- 이름의 맨 앞글자는 대문자, 그 외는 소문자, 성은 모두 대문자로 만들기 
```
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName.split(" ");   
    finalName[0] = finalName[0].slice(0,1).toUpperCase()+finalName[0].slice(1).toLowerCase();
    finalName[1] = finalName[1].toUpperCase();
    finalName = finalName.join(" ");
    return finalName;
};

console.log(nameChanger(name));
```

#### JSON (JavaScript Object Notation)

- [JSON linter](http://jsonlint.com) : 문법 오류를 잡아줌

#### `<` , `>` 대신 entity코드인 `&lt;`, `&gt;` 넣기 

```
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = newHTML.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
    return newHTML;
};
console.log(charEscape(html));
```

- [정규 표현식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
 - g : Global search

 #### for in 문 
 - 객체의 값을 순차적으로 접근한다.  

 ```
 var work = {
  "jobs": [{
      "title": "Web publisher",
      "employer": "hilab",
      "dates": "2016"
    },
    {
      "title": "Flash Developer",
      "employer": "freelancer",
      "dates": "2007 ~ 2015"
    }]
}

for(job in work.jobs) {
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedJob = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedJob);
}

 ```

 ```
 function locationizer(work_obj) {
  var locationArray = [];
  for(job in work_obj.jobs){
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
  }
  return locationArray;
}

console.log(locationizer(work));
 ```