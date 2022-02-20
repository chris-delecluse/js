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

    console.log("\n---------------------------------\n");

    return tvSerie;
}

enjoy = askTvSerie();

console.log(JSON.stringify(enjoy, null, 5)); // display a object to JSON format.