// let a = 10;
// let b = 15;
// function sum(a, b) {
//     let result = a + b;
//     return result;
// }

// console.log(sum(a, b));

// 함수의 선언 f(x) =2x+1

// function f(x) {
//     return 2 * x + 1;
// }

// console.log(f(3));

// 함수 이름 multiple, 매개 변수 a,b
// function multiple(a, b) {
//     return a * b;
// }

// let a = 8;
// let b = 7;
// console.log(multiple(a, b));

// 두 정수의 나눗셈을 통해 결과값 구하기
// 단 분모는 0이 될 수 없음.
// 분모가 0이면 결과값을 0으로 출력.

// let a = 10;
// let b = 0;
// function divide(a, b) {
//     let res = b == 0 ? 0 : a / b;
//     return res;
// }
// console.log(divide(a, b));

// return을 만나면 함수는 즉시 종료.
// 조건문에서는 분기마다 return이 있어야 함.

// 1~10까지 출력하는 함수
// let num = 10;
// function number(num) {
//     // 함수 정의
//     for (let i = 0; i < num; i++) {
//         // 10(num) 까지 반복
//         console.log(i + 1); //  (안에서 변하는 수 i를 출력)
//     }
// }
// number(num);

// 홍길동 n번 출력
// let n = 7;
// function name1(n) {
//     for (let i = 0; i < n; i++) {
//         console.log("홍길동");
//     }
// }
// name1(n);

// 이름 n번 출력
// let n = 7;
// let name4 = "한동석";
// function name2(n, name4) {
//     for (let i = 0; i < n; i++) {
//         console.log(name4);
//     }
// }
// name2(n, name4);

// 세 정수의 뺄셈 함수
// let a = 10;
// let b = 2;
// let c = 5;
// function minus(a, b, c) {
//     return a - b - c;
// }
// console.log(minus(a, b, c));

// 1~n까지의 합 구하는 함수
let i = 10;
let sum = 0;
function total(i) {
    for (let n = 0; n < i; n++) {
        sum += n + 1;
    }
    return sum;
}
console.log(total(i));

// 홀수 짝수, 짝수 홀수로 바꾸기
// let d = 5;

// function change(d) {
//     return (d += 1);
// }
// console.log(change(d));
