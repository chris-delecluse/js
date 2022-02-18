const readlineSync = require("readline-sync");

let q0 = readlineSync.question("Quel est ton nom ? : ");
let q1 = readlineSync.question("Quel est ton annimal preferé ? : ");
let q2 = readlineSync.question("Quel est ta couleur préféré ? : ");
let q3 = readlineSync.question("Quel est ton chiffre fétiche ? : ");

console.log("Hello , " + q0 + " je vois que ton annimal préféré est " + q1 + " , il est de couleur " + q2 + " (rien de choquant avec couleur ? :p) ");
console.log("Ha tien j'ai vue aussi qu'il possede " + q3 + " pattes(bizarre non?)");

// Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.