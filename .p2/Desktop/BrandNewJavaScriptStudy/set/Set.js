const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(1);

console.log(set);
console.log(set.size);
//converting set to map

let users = new Set(['Alice', 'Bob', 'Charlie']);
let userScores = new Map();

users.forEach((user) => {
    userScores.set(user, 0);
});

console.log(userScores);

let fruits = new Set(['Apple', 'Orange', 'Blueberry']);
let fruistsMap = new Map();

Array.from(fruits).forEach((index, fruits) => {
    fruistsMap.set(index, fruits);
});

console.log(fruistsMap);

//convert a set to an array

console.log(Array.from(users));
//or

console.log(...users);

//convert an array to set

const array = ['Adarsh', 'Albin', 'Niyas', 'Rizwan', 'Adarsh'];

const userSet = new Set(array);
console.log(userSet);
