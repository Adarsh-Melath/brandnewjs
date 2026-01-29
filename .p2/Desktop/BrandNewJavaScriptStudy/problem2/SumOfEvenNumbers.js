const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

//without in built methods

for (let number of numbers) {
    if (number % 2 == 0) {
        sum += number;
    }
}

//with built in methods

sum = 0;
numbers.forEach((number) => {
    if (number % 2 == 0) {
        sum += number;
    }
});

console.log(sum);
