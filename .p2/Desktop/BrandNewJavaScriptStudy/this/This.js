//default binding

// function greet() {
//     console.log(this);
// }

// greet();

//implicit binding
// const person = {
//     name: 'max',
//     greet() {
//         console.log(this.name);
//     },
// };

// person.greet();

// explicit binding
// function greet() {
//     console.log(this.name);
// }

// const person1 = {
//     name: 'Adarsh',
// };

// const person2 = {
//     name: 'Fayas',
// };

// greet.call(person1);
// greet.apply(person2);
// const greetings = greet.bind(person1);
// greetings();

//Arrow function and this

const person = {
    name: 'Adarsh',
    greet: function () {
        const message = () => console.log(this.name);
        message();
    },
};

person.greet();
