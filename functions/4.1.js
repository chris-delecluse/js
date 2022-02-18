const readlineSync = require("readline-sync");

// calcSurface take two args the length and the width and return the surface.
const calcSurface = (length, width) => {
    return length * width;
}

console.log("Hello, i will calculate for you the surface of a rectangle\n");

let askUserLength = readlineSync.questionInt("Enter the length : ");
let askUserWidth = readlineSync.questionInt("Enter the width : ");

console.log("\nSurface : " + calcSurface(askUserLength, askUserWidth));