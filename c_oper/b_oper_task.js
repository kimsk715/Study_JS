// 출력 예)
// 당신의 혈액형은?
// 1. A
// 2. B
// 3. O
// 4. AB

// 선택 값 예시)
// 1
//
// 출력 예)
// 꼼꼼하고 세심하다.
//

// 사용자가 선택한 혈액형의 메세지는 다음과 같다.
// A: 꼼꼼하고 세심하다.
// B: 추진력이 좋다.
// O: 사교성이 좋다.
// AB: 착하다.'

console.log("당신의 혈액형은?");
console.log("1.A");
console.log("2.B");
console.log("3.O");
console.log("4.AB");

// 각 혈액형에 할당된 숫자
let A = 1;
let B = 2;
let O = 3;
let AB = 4;
//주어진 값 receive(1~4, 그 이외는 오류라고 알려주기기)
let receive = 5;
//선택값에 따른 출력 메시지
equalA = "꼼꼼하고 세심하다";
equalB = "추진력이 좋다";
equalO = "사교성이 좋다";
equalAB = "착하다";
// 받은 값이 A형과 같으면 출력, 아니면 다시 B형과 비교해서 같으면 출력, 또 아니면 O형과 비교해서 같으면 출력,
// 만약에 또 아니면 AB형과 비교해서 같으면 출력, 아니면 오류 메시지 출력
let res =
    receive === A
        ? equalA
        : receive === B
        ? equalB
        : receive === O
        ? equalO
        : receive === AB
        ? equalAB
        : "다시 입력해주세요!";

console.log(res);
