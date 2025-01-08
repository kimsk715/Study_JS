let number1 = 11;
let number2 = 11;
let condition1 = number1 > number2;
let condition2 = number1 === number2;
let equalMessage = "두 수가 같습니다.";
if (number1 > number2) {
    console.log(`더 큰 값: ${number1}`);
} else if (number1 === number2) {
    console.log(equalMessage);
} else {
    console.log(`더 큰 값:${number2}`);
}

// 위의 조건이 false이면서 같지 않기 대문에 num2가 더 큰 값이지만, 가독성 때문에, !== 보다는 부등호로 작성하는 것이 더 낫다.
// if() 안에는 true/false가 들어가도 됨.

// 개별처리보다는 일괄처리 추천.
