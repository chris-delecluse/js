let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
let result = 0;

// Part one
for(let i = 0; i < array1.length; i++) {
    result += array1[i];
}
result = result / array1.length;

console.log(result + "\n");

// Part two
result = 0;

for(i = 0; i < array2.length; i++) {
    result += array2[i];
}
result = result / array2.length;

console.log(result)

// need to find a better solution... forEach loop ! that's better for array.