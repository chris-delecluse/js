const readlineSync = require("readline-sync");

let userInput = readlineSync.questionInt("Enter a number between 1 and 7 : ");

switch (userInput) {
    case 1 : 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 : 
        console.log("Thursday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    case 6 : 
        console.log("Saturday");
        break;
    case 7 : 
        console.log("Sunday");
        break;
    default :
    console.log("Error ! please choose a number between 1 and 7.");
}