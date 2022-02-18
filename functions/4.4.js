const readlineSync = require("readline-sync");

const rand10 = () => {
    return Math.trunc(Math.random() * 10);
}

const multiRand = (n) => {
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }

    return array;
}

const average = (arr) => {
    let result = 0;  

    arr.forEach(element => {
        result += element;
    });

    return result / arr.length;
}

const min = (arr) => {
    return Math.min(...arr);
}

const max = (arr) => {
    return Math.max(...arr);
}

const test = () => {
    let input = readlineSync.questionInt("Hello, Enter a number : ");
    input = multiRand(input);
    console.log(input);
    console.log("Average : " + average(input) + "\nMin value : " + min(input) + "\nMax value : " + max(input));
}

test();