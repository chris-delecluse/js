const readlineSync = require("readline-sync");

const rand10 = () => {
    return Math.trunc(Math.random() * 10);
}

const multiRand = (n) => {
    let array = [];

    for (let i = 0; i < n; i++) {
        // array[i] = rand10();
        array.push(rand10());
    }

    return array;
}

let numberOfRand = readlineSync.questionInt("Enter a number of rand you want : ");

    if(numberOfRand <= 0) {
        console.log(numberOfRand + " really ?");
    } else {
        console.log(multiRand(numberOfRand));
    }