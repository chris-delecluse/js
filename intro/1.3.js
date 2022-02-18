const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Please enter you first name : ');
console.log("Hello " + firstName);