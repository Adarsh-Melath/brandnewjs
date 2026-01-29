const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function avgOfEvenNumbers(...numbers) {
    const sum = numbers
        .filter((number) => number % 2 == 0)
        .reduce((pre, curr) => pre + curr, 0);

    return sum / numbers.filter((number) => number % 2 == 0).length;
}

console.log(avgOfEvenNumbers(...numbers));
