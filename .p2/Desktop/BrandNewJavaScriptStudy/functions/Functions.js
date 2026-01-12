//function declaration/Regular functions
function greetTheUser(name = 'Guest') {
    console.log('Hello ' + name);
}

greetTheUser();
greetTheUser('Adarsh');

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//function expression

// const square = function (number) {
//     return number * number;
// };
// console.log(square(5)); // returns 25

//Arrow Functions

// const returnName = (name) => name;
// console.log(returnName('Adarsh'));

//IIFE

// (function () {
//     console.log('I am an IIFE');
// })();

// Generator functions

// function* fibonacciSequence() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }

// const fibonacciGen = fibonacciSequence();
// console.log(fibonacciGen.next().value);
// console.log(fibonacciGen.next().value);
// console.log(fibonacciGen.next().value);
// console.log(fibonacciGen.next().value);
