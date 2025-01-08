// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력

// const FullName = (surName, Name, callback) => {
//     let result = surName + Name;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const Edit = (result) => {
//     console.log(`${result}님`);
// };

// FullName("한", "동석", Edit);

// const FiveorMore = (unitprice, totalprice, callback) => {
//     result = totalprice / unitprice;
//     console.log(result);
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const Check = (result, callback) => {
//     let check1 = result <= 5 ? true : false;
//     if (callback) {
//         callback(check1);
//     }
//     return check1;
// };

// const Print = (check1) => {
//     console.log(check1);
// };

// FiveorMore(21, 100, Check);
// Check(result, Print);

// const Charged = (price, state, callback) => {
//     result = state == true ? "결제 완료" : "결제 취소";
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const Print = (result) => {
//     console.log(result);
// };

// Charged(10000, false, Print);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 60점일 경우 합격, 아니면 불합격

// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false

const Farm = (pig, cow, callback) => {
    total = pig + cow;

    if (callback) {
        callback(pig, cow, console.log);
    }
    return total;
};

const Comparison = (pig, cow, callback) => {
    smaller = pig < cow ? pig : cow;
    if (callback) {
        callback(smaller);
    }
    return smaller;
};

Farm(1, 3, Comparison);

// const Print = (total, smaller) => {
//     console.log(total, smaller);
// };

// Farm(10, 20, Print);
// Comparison(10, 20, Print);
