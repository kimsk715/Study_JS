// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const fullname = (surName, Name, callback) => {
//     let result = surName + Name;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const edit = (result) => {
//     console.log(`${result}님`);
// };

// fullname("한", "동석", Edit);

//====================================================================================

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const fiveormore = (unitprice, totalprice, callback) => {
//     result = totalprice / unitprice;
//     console.log(result);
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const check = (result, callback) => {
//     let check1 = result <= 5 ? true : false;
//     if (callback) {
//         callback(check1);
//     }
//     return check1;
// };

// const print = (check1) => {
//     console.log(check1);
// };

// fiveormore(21, 100, check);
// check(result, print);

//====================================================================================

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const charged = (price, state, callback) => {
//     result = state == true ? "결제 완료" : "결제 취소";
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const print = (result) => {
//     console.log(result);
// };

// charged(10000, false, print);

//====================================================================================

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
const farm = (pig, cow, callback) => {
    // 소&돼지의 총합
    if (callback) {
        callback(pig, cow, console.log, console.log);
        // callback을 통해 적은 쪽의 값과 총합의 값을 넘겨줌. console.log 함수를 적용했기 때문에, 출력도 실행하게
    }

    return total;
};

const comparison = (pig, cow, callback) => {
    total = pig + cow;
    smaller = pig < cow ? pig : cow;
    if (callback) {
        callback(smaller, total);
    }
    return smaller;
};

farm(4, 3, comparison);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격

// const average = (kor, eng, math, callback) => {
//     check = (kor + eng + math)/3 >=60 ;
//     if(callback){
//         callback(check)
//     }
//     return check;
// }

// const print = (check) => {
//     A = "합격"
//     B = "불합격"
//     let message = check ? A : B;
//     console.log(message)
// }

// average(80,0,60,print)

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

// const sum = (n,callback) => {
//     let total=0;
//     for(i=0; i<n; i++)
//     {
//         total += i+1;
//     }
//     if(callback){
//         callback(total);
//     }
//     return total;
// }

// const print = (total) => {
//     console.log(total>=5000 ? total-5000 : total)
// }

// sum(101,print)

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// const find = (n,m,callback) =>{
//     let result = 0;
//     for(i=n; i<m+1; i++){
//     if(i%2==0){
//         result = i;
//         break;
//     }
// }
//     if(callback){
//         callback(result)
// }
// return result;
// }

// const print = (result) => {
//     console.log(result)
//     console.log(result>=10 ? true : false);
// }

// find(13,19,print)

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5 이상, 50 이상이면 true
// 하나라도 false라면 false

// const calculate = (a,b,callback) => {
//     let subtract = a-b;
//     let multiply = a*b;
//     let check = ""
//     if(subtract>=5 && multiply>=50){
//         check = true;
//     }
//     else{
//         check=false;
//     }
//     if(callback){
//         callback(check);
//     }
//     return check;
// }

// const print = (check) => {
//     console.log(check)
// }

// calculate(12,6,print)
