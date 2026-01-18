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

console.log(names);
console.log(names.slice(1, 4));
console.log(names);