const MESSAGE = `당신의 혈액형은?
1. A
2. B
3. O
4. AB`;

const A_MESSAGE = "꼼꼼하고 세심하다.";
const B_MESSAGE = "추진력이 좋다.";
const O_MESSAGE = "사교성이 좋다.";
const AB_MESSAGE = "착하다.";
const ERROR_MESSAGE = "다시 시도해주세요.";

let choice = 4;
let result = null;

switch (choice) {
    case 1:
        result = A_MESSAGE;
        break;
    case 2:
        result = B_MESSAGE;
        break;
    case 3:
        result = O_MESSAGE;
        break;
    case 4:
        result = AB_MESSAGE;
        break;
    default:
        result = ERROR_MESSAGE;
        break;
}

console.log(result);
