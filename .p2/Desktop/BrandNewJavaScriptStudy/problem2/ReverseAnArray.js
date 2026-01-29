//question: Reverse an array and multiply its first half by 2 and second half by 5 without inbuilt methods and with inbuilt methods.

//with in built methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.reverse();
const newNumbers = numbers.map((number, index) => {
    if (index < numbers.length / 2) {
        return number * 2;
    } else {
        return number * 5;
    }
});

console.log(newNumbers);
