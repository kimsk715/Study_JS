// let a = 15;
// let b = 15;
// let res = null;
// if (a > b) {
//     res = a;
// } else if (a < b) {
//     res = b;
// } else {
//     res = "==";
// }
// console.log(res);

//------------------------------------------------------------

// let res = null;
// let year = 2000;
// if (year % 4 == 0 && year % 100 != 0) {
//     res = "윤년";
// } else if (year % 400 == 0) { //한 줄로 해서 400의 배수는 or로 지정해도 됨.
//     res = "윤년";
// } else {
//     res = "윤년이 아닙니다.";
// }

// console.log(res);

//------------------------------------------------------------

// console.log("현재 시간은?");

// let h = 9;
// let m = 0;
// console.log(`${h}시 ${m}분`);
// if (m > 45) {
//     m = m - 45;
// } else {
//     h = h - 1;
//     m = m + 15;
// }

// console.log(`지금으로부터 45분 전은 ${h}시 ${m}분입니다.`);

//------------------------------------------------------------

// let d1 = 6;
// let d2 = 2;
// let d3 = 5;

// if (d1 == d2 && d2 == d3) {
//     price = 10000 + d1 * 1000;
// } else if (d1 == d2) {
//     price = 1000 + d1 * 100;
// } else if (d2 == d3) {
//     price = 1000 + d2 * 100;
// } else if (d1 == d3) {
//     price = 1000 + d1 * 100;
// } else {
//     if (d1 > d2 && d1 > d3) {
//         price = d1 * 100;
//     } else if (d2 > d3 && d2 > d1) {
//         price = d2 * 100;
//     } else {
//         price = d3 * 100;
//     }
// }
// console.log(price);
