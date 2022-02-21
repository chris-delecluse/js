const readlineSync = require("readline-sync");

const askTvSerie = () => {
    
    let tvSerie = {};
    let nbrCastingMembers = 0;
    
    tvSerie.name = readlineSync.question("Enter a series name : ");
    tvSerie.prodYear = readlineSync.questionInt("Enter its production year : ");
    tvSerie.castMember = [];

    nbrCastingMembers = readlineSync.questionInt("Enter the number of casting member you want add : ");

    for (let i = 0; i < nbrCastingMembers; i++) {
        tvSerie.castMember.push(readlineSync.question("Enter the name of cast : "));
    }

    return tvSerie;
}

const randomizeCast = (tvSerie) => {
   tvSerie.castMember = tvSerie.castMember.sort(()=>Math.random()-0.5);
   return tvSerie;
}

let a = askTvSerie();
console.log("\n---------------------------------\n");
console.log(JSON.stringify(a, null, 5)); // display a object to JSON format.
console.log("\n---------------------------------\n");
let b = randomizeCast(a);
console.log(JSON.stringify(b, null, 5)); // display a object to JSON format.