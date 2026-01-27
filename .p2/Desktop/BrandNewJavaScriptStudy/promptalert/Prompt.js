const name = prompt('Enter your name: ');

function greet(name = 'Guest') {
    console.log(`Hello ${name}!`);
}

greet(name);
alert(`Hello ${name}!`);