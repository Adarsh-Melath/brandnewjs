const prompt = require('prompt-sync')();

let str = prompt('Enter a String:  ');

str = str.split('');
let first = str.shift();
let last = str.pop();

str.push(first.toLowerCase());
str.unshift(last.toUpperCase());

console.log(str.join(''));
