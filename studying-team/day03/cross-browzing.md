## 크로스 브라우징 

IE7에서는 display: inline-block이 안된다. 
핵을 써서 *display: inline, zoom: 1속성을 넣으면 inline-block처럼 된다. 

```
.ie7{*display:inline;zoom:1}
```

after등도 IE7에서 안된다. clearfix등을 쓸 때 
핵을 써서 zoom: 1을 넣으면 적용된다. 

#### 모바일에서는 하위버전 상관하지 않아도 된다. 
모바일에서는 html5 속성이나 css3 속성 사용가능! section article footer 태그 등 사용 ㅇㅋㅇㅋ 
또한 :before,:after(주로 보더값이나 버튼같은 거 넣을 때 유용함) ,first-child,last-child,nth-child(n)도 가능함
레티나 작업이나 모바일 작업에서는 모든 이미지를 짝수로 2배 포지션 값은 1/2로 잡음.


#### 말줄임 할 때 
white-space:nowrap;text-overflow:ellipsis(말줄임);overflow:hidden 을 씁니다. 만약 width값이 없으면 ie에서는 안 먹힐 가능성 있음

상위버전에서는 여러줄 말줄임 가능 
p{display:-webkit-box;-webkit-line-clamp:4(4줄);-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;width:100px;}모바일 1줄이상 말줄임할때!

#### 포지션이 absolute되면 요소가 자동으로 inline-block으로 바뀜.

#### body{-webkit-text-size-adjust:none;}/*모바일 사파리에서 landscape모드에서 자동으로 글씨크기 커지는 거 방지함!*/

#### inline-block 사용할 때 여백 생기는 것 -> 부모에 font-size:0을 주고 ie에서는 zoom:1을 사용하면 됩니다. 그 때도 먹히지 않으면 일일히 값 조정하는 수 밖에..

#### button{overflow:visible;border: 0;background: 0;white-space: nowrap;}/*ie7에서는 버튼의 인풋과 버튼의 위치값과 넓이값을 인지하지 못해서 공백이 생겨보여 그래서 버튼과 인풋에 overflow visible로 넣어주면 원래대로 보여진다!* white-space nowrap은 ie7에서 버튼 밸류값이 한줄로 나올때 줄바꿈을 강제로 못하게 한줄로 만들어주는 속성임!*/

#### .blind{overflow:hidden;font-size:0;line-height: 998em;}
/*font-size를 0으로 하면 ie7에서는 .으로 나오니까 line-height까지 0으로 맞춰줘야함* 그리고 블라인트로 클래스를 만들어서 붙여주면 됨 ㅎㅎ*/

display 인라인요소는 ie7에서 안먹기 때문에 디스플레이 앞에 *를 넣으면 먹습니다.... 핵이얌 ie7에서만 먹는거얌*/

button::-moz-focus-inner{padding: 0;border:0;}/*파이어폭스에서만 버튼에 공백생겨서 이미지 잘려보이게 나오는거 방지 크로스브라우징!*

button span{position: relative;}
/*ie탭에서 로그인효과 없애려면 버튼 안에 태그에 포지션값을 줌!*/