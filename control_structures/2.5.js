const readlineSync = require("readline-sync");

const numberAFound = 42;
let userInputNumber;

while(userInputNumber !== numberAFound) {
    userInputNumber = readlineSync.questionInt("Enter your favorite number : ");
    if(userInputNumber === numberAFound) {
        console.log("YAI ! you found the mistery number (" + userInputNumber + ") !\n");
    }
    else {
        console.log("Are you sure ?\n");
    }
}