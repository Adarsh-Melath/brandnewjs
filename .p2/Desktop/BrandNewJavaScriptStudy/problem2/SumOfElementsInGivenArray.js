const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//using inbuilt method

// const sum = numbers.reduce((prev, current) => prev + current, 0);

//without inbuilt method
let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log(sum);
