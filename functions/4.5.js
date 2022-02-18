const readlineSync = require("readline-sync");

const calcDistance = (y1, y2, x1, x2) => {
    let a = y1 - y2;
    let b = x1 - x2;

    return Math.sqrt(a*a + b*b);
}

let posY1 = readlineSync.questionInt("Enter pos y1 : ");
let posY2 = readlineSync.questionInt("Enter pos y2 : ");
let posX1 = readlineSync.questionInt("Enter pos x1 : ");
let posX2 = readlineSync.questionInt("Enter pos x2 : ");

console.log(calcDistance(posY1, posY2, posX1, posX2));