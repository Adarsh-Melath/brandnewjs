//normal parameter
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet();
greet('Adarsh');

//default parameter
function greet2(name = 'Guest') {
    console.log(`Hello , ${name}!`);
}

greet2();
greet2('Adarsh');

//rest parameter
function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(total);
