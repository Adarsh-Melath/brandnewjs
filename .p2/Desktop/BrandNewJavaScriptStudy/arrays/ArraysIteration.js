const names = ['Adarsh', 'Albin', 'Rizwan', 'Ajex Joshy'];

// let indexOfNames = 0;
// while (indexOfNames < names.length) {
//     console.log(names[indexOfNames]);
//     indexOfNames++;
// }

// let indexOfNames = 0;
// do {
//     console.log(names[indexOfNames++]);
// } while (indexOfNames < names.length);

// for (let indexOfNames = 0; indexOfNames < names.length; indexOfNames++) {
//     console.log(names[indexOfNames]);
// }

// for (let indexOfNames in names) {
//     console.log(names[indexOfNames]);
// }

// for (let name of names) {
//     console.log(name);
// }

// names.forEach((name) => {
//     console.log(name);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squareOfNumbers = numbers.map((number) => number ** 2);
// console.log(squareOfNumbers);

// const person = [
//     {
//         name: 'Adarsh',
//         age: 18,
//     },
//     {
//         name: 'Albin',
//         age: 18,
//     },
//     {
//         name: 'Rizwan',
//         age: 18,
//     },
//     {
//         name: 'Ajex Joshy',
//         age: 18,
//     },
// ];

// const extractedNames = person.map((person) => person.name);
// console.log(extractedNames);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((number) => number % 2 == 0);
// console.log(evenNumbers);

// const persons = [
//     {
//         name: 'Adarsh',
//         age: 17,
//     },
//     {
//         name: 'Albin',
//         age: 18,
//     },
//     {
//         name: 'Rizwan',
//         age: 45,
//     },
//     {
//         name: 'Ajex Joshy',
//         age: 36,
//     },
// ];

// const adultPersons = persons.filter((person) => person.age >= 18);
// console.log(adultPersons);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce((acc, currentNumber) => acc + currentNumber, 0);
// console.log(sum);

// const strings = ['I', 'am', 'Adarsh'];
// const singleSentence = strings.reduce(
//     (previous, currentWord) => previous + ' ' + currentWord,
//     ''
// );
// console.log(singleSentence);

// const reversedSingleSentence = strings.reduceRight(
//     (previous, currentWord) => previous + ' ' + currentWord,
//     ' '
// );

// console.log(reversedSingleSentence);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const allEven = numbers.every((number) => number % 2 == 0);
// const allLessThan10 = numbers.every((number) => number <= 10);
// console.log(allLessThan10);
// console.log(allEven);
// const someEven = numbers.some((number) => number % 2 === 0);
// console.log(someEven);

// const mappedAndFlattened = numbers.map(number => { return [number, number ** 2] }).flat();
// console.log(mappedAndFlattened)

// const arrayLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3,
// };

// const array = Array.from(arrayLike);
// console.log(array);

const fruits = ['Apple', 'Orange', 'Banana'];

// const iterator = fruits.keys();

// for (let key of iterator) {
//     console.log(key);
// }

const iterator = fruits.entries();

// for (let [index, value] of iterator) {
//     console.log(`${index}: ${value}`);
// }

const updatedIterator = fruits.with('Apple', 'Blue berry');
console.log(fruits);
console.log(updatedIterator);
