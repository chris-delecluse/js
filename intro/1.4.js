const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What is your first name : ");
let lastName = readlineSync.question("What is your last name : ");
let city = readlineSync.question("Where you from ? : ");

console.log("Great ! your name is " + firstName + " " + lastName + " and you come from to " + city);