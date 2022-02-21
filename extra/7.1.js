const readlineSync = require("readline-sync");

const randomNbr = (min, max) => {
    return Math.round(Math.random() * (max-min) + min);
}

let mysteryNumber = randomNbr(1, 100);
let userNumber = 0;

console.log("\n ----------------------------------------");
console.log("|             NUMBER GUESSER             |")
console.log(" ----------------------------------------\n");

while (userNumber != mysteryNumber) {
    userNumber = readlineSync.questionInt("Enter a number between (1 - 100) : ");
    if (userNumber < mysteryNumber) {
        console.log("\nIt's too LOW !\n");
    } else if (userNumber > mysteryNumber) {
        console.log("\nIt's too HIGH !\n");
    } else {
        console.log("\nWell guessed! the number was < " + mysteryNumber + " >");
    }
}