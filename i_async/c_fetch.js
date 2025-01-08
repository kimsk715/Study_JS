// fetch(URL), URL로 요청한 뒤 결과 데이터를 Promise 객체에 담아서 리턴.
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => console.log(user.name));
    });
//중괄호가 없으므로 리턴값.
