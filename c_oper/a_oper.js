// // let number1 = 10;
// // let number2 = 20;
// // // let number3 = "10";
// // let number4 = "15";

// // let condition = number1 !== number4; 두 값이 같지 않기 때문에 결과값은 true.
// // console.log(condition); true
// // // // console.log(number1 == number3); // true
// // // // console.log(number1 === number3); // false
// // // // console.log(number1 !== number2); // true
// // // console.log(condition);
// // // console.log(typeof condition);
// // // console.log(number1 > 5 && number2 < 10); //false
// // // console.log(number1 > 5 || number2 < 10); // true

// // let c1 = number1 > 5;
// // c2 = number2 < 10;

// // console.log(c1 && c2);
// // console.log(c1 || c2);

// // // 조건식은 값으로 봄.

// // 삼항 연산자

// let number1 = 10;
// let number2 = 11;

// let res = number1 > number2 ? number1 : number2;
// console.log("더 큰 값:" + res);
// // 1. 숫자끼리 사용하면 연산!
// // 2. 문자열이 포함되어 있으면 연결!

// 두 정수를 변수에 담고, 삼항 연산자로 대소비교를 한다.
// 단 두 수가 같을 때에는 알맞은 메세지를 출력.

let number1 = 2;
let number2 = 2;

// let res1 = number1 > number2 ? number1 : number2;
// let res2 = number1 < number2 ? number1 : number2;
// let res3 = number1 === number2 ? "두 수가 같습니다" : "두 수가 다릅니다";
// console.log("더 큰 값: " + res1);
// console.log("더 작은 값: " + res2);
// console.log(res3);

let res1 = number1 > number2;
let res2 = number1 == number2;

let res3 = res1 ? number1 : res2 ? "두 수가 같습니다" : number2;
// res1 이 true면, number1, 아니면 res2가 참일때, 앞의 메시지, 아니면 number2 출력.
console.log(res3);
