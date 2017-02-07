/*
The code below is calling 'savePost' three times, but it is doing so using a for loop.  
This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  
Rather than using a for loop, refactor the code below to instead use the forEach helper.
for 루프를 사용하면 함수의 목적을 이해하는 것이 더 어려워진다. for 루프를 사용하는 대신 forEach를 사용해서 코드 리펙토링해보자.
*/

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    // for문 대신 
    // for (var i = 0; i < posts.length; i++) {
    //   savePost(posts[i]);
    // }
    // forEach문 사용
    posts.forEach(savePost);
}