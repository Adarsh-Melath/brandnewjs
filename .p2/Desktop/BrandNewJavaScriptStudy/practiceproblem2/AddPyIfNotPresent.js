const prompt = require('prompt-sync')();

const str = prompt('Enter a String: ');

function addPy(str) {
    if (str.substr(0, 2) !== 'Py') {
        str = str.split('');
        str.splice(0, 0, 'P', 'y');
        return str.join('');
    }

    return str;
}

console.log(addPy(str));
