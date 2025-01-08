// 두 정수의 덧셈

// false를 의미하는 값들 : 0, "", null, undefined
// const add = (num1, num2, callback) => {

// }

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

const Multiply = (num1, num2, callback) => {
    let result = num1 * num2;
    if (callback) {
        callback(result);
    }
    return result;
};

const Double = (result) => {
    console.log(result * 2);
};

Multiply(10, 20, Double);
// let res = Multiply(10, 20);
// console.log(res);
