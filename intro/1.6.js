const readlineSync = require("readline-sync");

console.log("Hello, i will give you the rest of a divide of two numbers ! Please be kind with me, i do all the job for you broooo");
let number1 = readlineSync.question("Enter a number : ");
let number2 = readlineSync.question("I need one more number : ");

console.log("The result : " + (number1 % number2));