let a = 2; // 주어진 4개의 값값
let b = 2;
let c = 1;
let d = 5;

let res1 = a % 2 === 0; // 첫 수가 짝수이면 true=1
let res2 = b > 0; // 두 번째 수가 양수이면 true=1
let res3 = c !== 0; // 세 번째 수가 0이 아니면 true=1
let res4 = d % 5 === 0; // 네 번째 수가 5의 배수이면 true=1
let ressum = res1 + res2 + res3 + res4;
let Message = null;
switch (ressum) {
    case 4:
        Message = "잠금 해제";
        break;
    default:
        Message = "잠금 해제 실패";
        break;
}
console.log(Message);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// 4개의 자물쇠가 있다.
// 각 좌물쇠는 조건식으로 이루어져있고,
// 모든 조건식이 true가 되어야 자물쇠가 열린다.
// 각 자물쇠의 조건식은 아래와 같다.

// 1. 첫 번째 정수가 짝수인지
// 2. 두 번째 정수가 양수인지
// 3. 세 번째 숫자가 0이 아닌지
// 4. 네 번째 숫자가 5의 배수인지

// 정수 4개를 입력받는다.

// 위의 모든 조건식이 true라면 좌물쇠가 열린다.
// swtich문을 사용해서 해결한다.
// 단, 논리 연산자는 사용하지 않는다.
