const numbers = [1, 2, 3, 4, 6, 2, 5, 8, 4, 9, 6];

const newNumberArray = [];

//without in built methods
// for (let number of numbers) {
//     if (newNumberArray.includes(number) === false && number % 2 == 0)
//         newNumberArray.push(number);
//     else if (number % 2 == 1) newNumberArray.push(number);
// }

// console.log(newNumberArray);

//with in built methods

numbers.map((number) => {
    if (newNumberArray.includes(number) === false && number % 2 == 0)
        newNumberArray.push(number);
    else if (number % 2 == 1) newNumberArray.push(number);
});

console.log(newNumberArray);