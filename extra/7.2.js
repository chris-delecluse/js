const readlineSync = require("readline-sync");

const fibonacci = (n) => {
    let a = 0;
    let b = 1;
    let c = 0;

    while (a <= n) {
        console.log(a);
        c = a + b; 
        a = b;
        b = c;
    }
}

let askUser = readlineSync.questionInt("Hello ! Can you enter a number : "); 

fibonacci(askUser);