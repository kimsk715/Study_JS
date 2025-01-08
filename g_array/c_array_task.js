// 10 ~ 1까지 Array 객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0).map((_, i) => 10 - i);
// // map 뒤에 .filter도 이어써도 됨.
// datas = datas.filter((data) => data % 2 == 0);
// console.log(datas);

// ==========================================================================================

// // 1 ~ 100까지 Array객체에 담은 후 3의 배수만 추출 후 출력
// let datas = new Array(100).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data % 3 == 0);
// for (i = 0; i < datas.length; i++) {
//     console.log(`3*${datas.indexOf(datas[i]) + 1}=${datas[i]}`);
// }
// // 그냥 구구단형식으로 출력해보기.

// ==========================================================================================

// 5개의 정수를 Array객체에 담은 후 최대값과 최소값 출력하기
// let datas = [210, 9, 100, 7, 33];
// let max = datas[0];
// let min = datas[0];
// // 초기 최댓값 및 최솟값은 Array의 첫 번째 값으로 가정.
// // 그 뒤 for-if 를 통해 최대 및 최솟값을 찾아냄.
// for (i = 0; i < 5; i++) {
//     if (datas[i] > max) {
//         max = datas[i];

//         // console.log(max);
//     } else if (datas[i] < min) {
//         min = datas[i];
//         // console.log(min);
//     }
// }
// // filter()에서 최대값 or 최솟값인 데이터만 남기도록 함.
// datas = datas.filter((data) => data == max || data == min);
// console.log(datas);

// ==========================================================================================

// 한글을 숫자로 변경하여 출력
// 삼사칠구 -> 3479
// let numberindex = new Array(
//     "영",
//     "일",
//     "이",
//     "삼",
//     "사",
//     "오",
//     "육",
//     "칠",
//     "팔",
//     "구"
// );
// let datas = new Array("삼", "사", "칠", "구");
// let result = new Array(4).fill(0);

// for (let i = 0; i < datas.length; i++) {
//     if (numberindex.includes(datas[i])) {
//         result[i] = numberindex.indexOf(datas[i]);
//         // console.log(result[i]); //테스트용
//     }
// }
// // result = parseInt(result);
// console.log(result);

// ==========================================================================================
// 숫자를 한글로 변경하여 출력
// 3479 -> 삼사칠구
// const numberindex = new Array(
//     "영",
//     "일",
//     "이",
//     "삼",
//     "사",
//     "오",
//     "육",
//     "칠",
//     "팔",
//     "구"
// ); //색인을 위한 문자열
// const datas = new Array("4", "4", "7", "9", "8", "5");

// for (let i = 0; i < datas.length; i++) {
//     // 입력값의 각 숫자마다 반복하기 위한 for문
//     for (let n = 0; n < numberindex.length; n++) {
//         // 만약 datas 문자열의 i번째에 있는 숫자가 numberindex의 한글숫자의 인덱스번호와 같다면, i번째의 숫자를 그 한글숫자로 변환
//         // 그리고 break를 통해 탈출하고, 다음 자릿수에 대해 검사한다.
//         // datas의 길이만큼 반복하면 모든 숫자가 한글로 바뀌게된다.
//         if (datas[i] == numberindex.indexOf(numberindex[n])) {
//             datas[i] = numberindex[n];
//             break;
//         }
//     }
// }
// console.log(datas);
// 다만 숫자를 문자열로 저장해야 되서
// 그냥 숫자열일때는 어떻게 될지 모르겠음.

// 강사님 코드
// ============================================================================
// 5개의 정수 최대&최소

// const datas = [3, 5, 6, 2, 1];
// let max = datas[0];
// let min = datas[0];

// datas.slice(1).forEach((data) => {
//     // 첫 번째 데이터는 비교할 필요가 없음.
//     // forEach가 for문 역할.
//     if (max < data) {
//         max = data;
//     }
//     if (min > data) {
//         min = data;
//     }
// });

// console.log(max, min);

// 한글을 숫자로 변경하여 출력
// 삼사칠구 -> 3479
const hangul = "공일이삼사오육칠팔구";
const input = "삼사칠팔";
String.prototype.map = Array.prototype.map;
String.prototype.forEach = Array.prototype.forEach;

let result = input.map((data) => hangul.indexOf(data)).join("");
result = parseInt(result); //숫자로 바꿔주기
console.log(result);

//

// const hangul = "공일이삼사오육칠팔구";

// let input = 3479;
// let result = "";

// while (input != 0) {
//     result = hangul[input % 10] + result;
//     input /= 10;
//     input = parseInt(input);
// }

// console.log(result);

// let input = "3479";
// let result = "";

// String.prototype.map = Array.prototype.map;
// String.prototype.forEach = Array.prototype.forEach;

// result = input.map((data) => hangul[data]).join("");
// console.log(result);

// 숫자를 한글로 변경하여 출력
// 3479 -> 삼사칠구

// let input = "3479";
// const hangul = "영일이삼사오육칠팔구";
// let result = "";
// while (input != 0) {
//     // 0이 되면 모든 자릿수를 검사한 것이므로 반복문 탈출.
//     result = hangul[input % 10] + result; // 10으로 나머지 == 마지막 자리의 수
//     input /= 10; // 다음 자릿수를 알기 위해 10으로 나눈 몫을 저장.
//     input = parseInt(input); // 소숫점은 방해되므로 삭제.
// }

// console.log(result);
