let a = 1; // 최초의 1항
let b = 1; // 최초의 2항항
let temp = null;
for (i = 0; i < 10; i++) {
    temp = a + b;
    a = b;
    b = temp;
    temp = 0;
    console.log(b);
}
console.log("피보나치 수열");
//피보나치 수열
