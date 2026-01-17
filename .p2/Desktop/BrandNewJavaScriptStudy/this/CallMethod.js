const person = {
    name: 'Adarsh',
    age: 18,
};

const greet = function () {
    console.log('Hello I am ' + this.name);
};

greet.call(person);