const prompt = require('prompt-sync')();

let str = prompt('Enter string: ');

function checkString(str) {
    if (str.slice(0, 4) === 'Java') { return true; }
    return false;
}

console.log(checkString(str));
