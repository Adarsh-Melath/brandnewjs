const prompt = require('prompt-sync')();

let str = prompt('Enter String: ');

function checkString(str) {
    if (str.includes('script')) return str.replace(/script/gi, '');
    else {
        return 'No script keyword found';
    }
}

console.log(checkString(str.toLowerCase()));
