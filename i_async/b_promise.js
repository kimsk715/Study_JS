// const promise = new Promise((resolve, reject) => {
//     //각각이 callback임. 앞이 성공, 뒤가 실패.
//     let check = false;
//     if (check) {
//         resolve("성공");
//     } else {
//         reject("실패");
//     }
// });
// promise.then(console.log).catch(console.log);

// then() : resolve에 해당하는 값을 사용.
// catch() : reject에 해당하는 값을 사용.
// 대기, 이행(resolve), 거절(reject)
// 비동기는 큐(Queue) 형식, 선입선출
const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve(JSON.stringify({ name: "한동석", email: "test@gmail.com" }));
    } else {
        reject("실패!");
    }
});
let user = null; // 동기

promise.then((data) => {
    user = data;
    // 비동기
});
// 코드 흐름 상은 위에서 아래이지만, 비동기가 나중에 실행되므로 null이 출력됨.
console.log(user); // 동기

// 모든 코드를 비동기화 하면 코드 흐름대로 실행 가능
