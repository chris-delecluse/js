const readlineSync = require("readline-sync");

const factorial = (n) => {
    if(n === 0 || n === 1) {
        return 1;
    }
    for(let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

let inputNumber = readlineSync.questionInt("Enter a factorial number : ");

console.log(factorial(inputNumber));