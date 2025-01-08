// 지역 변수, 전역 변수
// 지역 변수 : 중괄호 영역 안에 선언된 변수
// 전역 변수 : 어떠한 영역에도 갇혀있지 않고 선언된 변수(중괄호 밖)

// for (let i = 0; i < 10; i = i + 1) {
//     // console.log(i);
//     // let은 중괄호를 영역으로 판단하기 떄문에
//     // 중괄호 밖에서는 해당 변수를 사용할 수 없음.
// }

// console.log(i);

// function f() {
//     var data = 10;
//     // 아무리 var 일지라도 함수의 중괄호는 영역으로 판단하므로
//     // 지역 변수임.
// }
// f();
// console.log(data);

// let : 모든 영역
// var : gkatn duddur
// let x = 10;
// 이름이 중복되는 것을 방지하고자 global 안에 전역 변수를 선언하자!
globalthis.x = 10;

function f() {
    let x = 20;
    console.log(globalthis.x);
}

f();

// global 과 window 중에서 알맞은 것에 넣어주는 것이 globalthis.
// 브라우저에서도 실행하고 Node.js로도 실행하려면,
// window와 global을 동시에 사용해야 하는 문제가 생김.
// gloablThis는 상황에 맞게 사용함.
