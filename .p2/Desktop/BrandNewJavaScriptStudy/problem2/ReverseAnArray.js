//question: Reverse an array and multiply its first half by 2 and second half by 5 without inbuilt methods and with inbuilt methods.

//with in built methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.reverse();
// const newNumbers = numbers.map((number, index) => {
//     if (index < numbers.length / 2) {
//         return number * 2;
//     } else {
//         return number * 5;
//     }
// });
// console.log(newNumbers);

//without in built methods

function reverse(numbers) {
    for (let i = 0; i < numbers.length / 2; i++) {
        let temp = numbers[i];
        numbers[i] = numbers[numbers.length - 1 - i];
        numbers[numbers.length - 1 - i] = temp;
    }
}

function multiply(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (i < numbers.length / 2) {
            numbers[i] = numbers[i] * 2;
        } else {
            numbers[i] = numbers[i] * 5;
        }
    }
}
reverse(numbers);
multiply(numbers);
console.log(numbers);
