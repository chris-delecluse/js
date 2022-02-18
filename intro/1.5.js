const readlineSync = require("readline-sync");

console.log("Hello, i will multiply two numbers for you ! Please be kind with me, i do all the job for you broooo");
let number1 = readlineSync.question("Now, please, can you enter a decimal number : ");
let number2 = readlineSync.question("I need one more number(with decimal) : ");

console.log("The result : " + (Math.trunc(number1) * number2));