/* Handling Permissions with Filter
필터로 권한 처리하기 

Filter the array of users, only returning users who have admin level access.  
관리자 수준의 엑세스 권한을 가진 사용자만 return하는 배열을 필터링하기 
Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
*/

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter( function(user) {
	return user.admin;
});

filteredUsers;