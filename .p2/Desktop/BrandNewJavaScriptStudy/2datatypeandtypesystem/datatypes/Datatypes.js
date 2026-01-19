//string

// using single  quotes
let name = 'Adarsh';
console.log('Name is: ' + name);

// using double quotes
let name1 = 'Adarsh';
console.log('Name is: ' + name1);

// using backticks
let name2 = `Adarsh`;
console.log('Name is: ' + name2);

// Number
let num1 = 10;
let num2 = 10.5;

console.log(num1 + num2);

// BigInt
let num3 = 1n;
console.log(num3);
console.log(typeof num3);
// console.log(num3 + 1); //it will lead us to error.
console.log(num3 + 2n);

// boolean
let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

// undefined
let name3;
console.log(name3);

// null
let name4 = null;
console.log(name4);

// symbols
let name5 = Symbol('Albin');
let name6 = Symbol('Albin');
console.log(name5);
console.log(name5 === name6);

//Others
let student = {
    name: 'Adarsh',
    age: 20,
    isStudent: true,
};
console.log(student);
