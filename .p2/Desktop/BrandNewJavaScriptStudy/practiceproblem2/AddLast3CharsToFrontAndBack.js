const prompt = require('prompt-sync')();

let str = prompt('Enter string: ');

console.log((str.slice(-3) + str + str.slice(-3)).toLowerCase());
