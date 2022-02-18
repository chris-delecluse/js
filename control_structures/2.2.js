const readlineSync = require("readline-sync");

console.log("Hello, i will ask you to enter three numbers: min, max and current (one by one) \n")

let min = readlineSync.questionInt("Enter the min number : ");
let max = readlineSync.questionInt("Enter the max number : ");
let current = readlineSync.questionInt("Enter the current number : ");

if(current > min && current < max) {
    console.log("\nGREAT ! your number (" + current + ") is between the min and max !");
} else {
    console.log("\nERROR ! your number is not between min and max, please retry.");
}