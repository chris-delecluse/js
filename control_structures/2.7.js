const readlineSync = require("readline-sync");

console.log("Hi, i will help you to make an addition :)\n");

let userInput;
let result = 0;
let n = readlineSync.questionInt("Enter : ");

for(let i = 0; i < n; i++) {
    userInput = readlineSync.questionInt("Enter a number : ");
    result += userInput;
}

console.log(result);