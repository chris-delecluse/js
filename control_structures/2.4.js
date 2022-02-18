let number = 0;

for (let i = 0; i < 100; i++) {
    number++;
        if(number % 2 === 0) {
            console.log(number + " / 2 = " + (number / 2));
        } else {
            console.log(number + " * 3 = " + (number * 3));
        }
}