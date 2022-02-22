const readlineSync = require("readline-sync");

const divisor = (n) => {
    let i = 2;
    if ((n % i) === 0) {
        for (let i = 2; i < n; i++) {
            if ((n % i) === 0) {
                console.log(i);
            }
        }
    } else if ((n % i) != 0) {
        console.log("Its a prime number ! ")
    }
}

let userNumber = readlineSync.questionInt("Hello ! Enter a number : ");

divisor(userNumber);