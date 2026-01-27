// const person = {
//     name: 'Adarsh',
//     age: 18,
// };

// const greet = function () {
//     console.log('Hello I am ' + this.name);
// };

// greet.call(person);

const person = {
    name: 'Adarsh',
};

function greet(name) {
    console.log(`Hey ${name} , My name is ${this.name}`);
}

greet.call(person,"Alice");
