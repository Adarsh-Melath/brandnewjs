const arr = [1, 2, 3, 4, 5];

// Adding new element to array

//push
// arr.push(6);
// console.log(arr);

//unshift
// arr.unshift(0);
// console.log(arr);

//removing element from array

//pop
// arr.pop();
// console.log(arr);

//shift()
// arr.shift();
// console.log(arr);

// splice and slice

//removing elements using splice

// const dayOfWeek = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ];

// console.log('Before Splicing');
// console.log(dayOfWeek.splice(4, 2));
// console.log('After Splicing ' + dayOfWeek);

const monthOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

// console.log(monthOfYear.splice(4));
// console.log(monthOfYear);

//adding elements using splice
const programmingLanguages = [
    'Java',
    'JavaScript',
    'Python',
    'C++',
    'PHP',
    'Ruby',
];

// console.log(programmingLanguages);
// programmingLanguages.splice(3, 0, 'C', 'Golang');
// console.log(programmingLanguages);

//slice
const names = ['John', 'Jane', 'Jeniffer', 'David', 'Dave'];

// console.log(names);
// console.log(names.slice(1, 4));
// console.log(names);

//higher order function of array
//map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const square = numbers.map((number) => number * number);
// console.log(square);
//filter
const even = numbers.filter((number) => number % 2 == 0);
// console.log(even);
//reduce
const sum = numbers.reduce((acc, currentNumber) => acc + currentNumber, 0);
// console.log(sum);
//forEach
// numbers.forEach((number)=>console.log(number));

//checking how much elements in the array follow a specific case
//every()
// console.log(numbers.every((number) => number % 2 == 0));
//some()
// console.log(numbers.some((number) => number % 2 == 0));

//finding the first element which follows a specific condition
// console.log(numbers.find((number) => number > 5));

//checking whether a element exists in a array or not
// console.log(numbers.includes(5));
// console.log(numbers.includes(100));

//making array from another source
// console.log(Array.from('adarsh'));

//flattening the array

//flat()
const arr1 = ['mon', 'tues', ['wed', 'thurs', ['fri', 'sat']], 'sun'];

// console.log(arr1.flat()); //[ 'mon', 'tues', 'wed', 'thurs', [ 'fri', 'sat' ], 'sun' ]
// console.log(arr1.flat(2)); //['mon', 'tues','wed', 'thurs','fri', 'sat','sun']

//flattening and doing some operation

//flatMap()

const arr2 = [1, 2, [4, 5], 6, 7, [8]];
console.log(arr2.flatMap((number)=> number));

//sorting 

console.log(numbers.sort((a, b) => a - b));