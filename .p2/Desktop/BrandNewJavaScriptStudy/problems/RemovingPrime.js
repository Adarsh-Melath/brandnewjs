const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nonPrimes = numbers.filter((number) => {
    let isPrime = true;
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) isPrime = false;
    }
    if (!isPrime || number <= 1) {
        return number;
    }
});

console.log(nonPrimes);
