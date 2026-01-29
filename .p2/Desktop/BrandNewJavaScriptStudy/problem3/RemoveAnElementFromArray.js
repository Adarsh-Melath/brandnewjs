const prompt = require('prompt-sync')();

const numbers = [10, 20, 30, 40, 50];
const removingNumber = Number(prompt('Enter the number to remove: '));

//without in built method
// if (numbers.includes(removingNumber)) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (removingNumber === numbers[i]) {
//             removeNumber(i, numbers);
//         }
//     }
// } else {
//     console.log('Number not found in array');
// }

// function removeNumber(startIndex, numbers) {
//     for (let i = startIndex; i < numbers.length; i++) {
//         numbers[i] = numbers[i + 1];
//     }
//     numbers.length--;
// }

//with inbuilt method

numbers.splice(numbers.indexOf(removingNumber), 1);

console.log(numbers);
