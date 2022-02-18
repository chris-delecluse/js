// Part one
let original = ["Monday", "Tuesday", "Wednesday", "Thursday", "Thursday", "Saturday", "Sunday"];
let cpy_1 = [];

original.forEach(el => {
    cpy_1.push(el);
})

console.log(cpy_1);
console.log("-----------------------------------");

// Part two
let cpy_2 = original.slice();

console.log(cpy_2);