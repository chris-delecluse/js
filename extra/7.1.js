const readlineSync = require("readline-sync");

const randomNbr = (min, max) => {
    return Math.round(Math.random() * (max-min) + min);
}

mysteryNumber = randomNbr(1, 100);

console.log("\n ----------------------------------------");
console.log("|             NUMBER GUESSER             |")
console.log(" ----------------------------------------\n");

userNumber = 0;

while (userNumber != mysteryNumber) {
    userNumber = readlineSync.questionInt("Enter a number between (1 - 100) : ");
    if (userNumber < mysteryNumber) {
        console.log("\nIt's to LOW !\n");
    } else if (userNumber > mysteryNumber) {
        console.log("\nIt's to HIGH !\n");
    } else {
        console.log("\nWell guessed! the number was < " + mysteryNumber + " >");
    }
}