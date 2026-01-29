const prompt = require('prompt-sync')();

let str = prompt('Enter String: ');
let char = prompt('Enter Character: ');

function checkChar(str, char) {
    if (str.slice(1, 4).split('').includes(char)) return true;
    return false;
}
console.log(checkChar(str.toLowerCase(), char));
