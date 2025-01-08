// 동기 : 특정 요청(페이지)이 응답될 대까지 다른 요청을 실행할 수 없음.
// 비동기 : 특정 요청(데이터)이 응답되지 않더라도 계속 다른 요청의 데이터를 응답받을 수 있음.
// 모든 프로그래밍 언어는 문자열("")이 있음. --> 데이터를 문자열로 변환시켜서 각 언어에 맞게 사용.
// json "{ "Key", "Value", ...}"
//

const user = {
    id: 1,
    email: "abcd@naver.com",
    pw: "1234",
};

// console.log(JSON.stringify(user)); //json(문자열)읋 추출.

// 문자열이므로, 사용을 위해서는 객체로 바꿔서 사용
const data = JSON.stringify(user);
const obj = JSON.parse(data);

console.log(obj.email);
