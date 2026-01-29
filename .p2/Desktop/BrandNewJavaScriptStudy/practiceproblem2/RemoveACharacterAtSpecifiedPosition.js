const prompt = require('prompt-sync')();

let str = prompt('Enter the String: ');
const index = prompt('Enter the index: ');
str = str.split('');
const removed = str.splice(index - 1, 1)
console.log(str.join(''));
