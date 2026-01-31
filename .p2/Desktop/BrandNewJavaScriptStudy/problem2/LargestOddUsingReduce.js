const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const largestOdd = numbers.reduce((acc, curr) => {
    if (curr % 2 == 1) {
        return Math.max(curr, acc);
    } else {
        return acc;
    }
}, 0);

console.log(largestOdd);
