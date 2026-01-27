const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const smallest = Math.min(...numbers);
let secondSmallest = Infinity;
console.log(smallest);

for (let number of numbers) {
    if (number !== smallest && number < secondSmallest) {
        secondSmallest = number;
        break;
    }
}

console.log(secondSmallest);
