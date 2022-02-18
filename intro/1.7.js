const readlineSync = require("readline-sync");

let userShoeSize = readlineSync.question("What is the size of your shoes ? : ");
let userBirthYear = readlineSync.question("What is your birth year : ");
let result;

result = userShoeSize * 2;
result = result + 5;
result = result * 50;
result = result - userBirthYear;
result = result + 1766;

console.log("result : " + result);