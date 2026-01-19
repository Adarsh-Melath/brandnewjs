const person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};

//for in loop

// for (let propertyOfPerson in person) {
//     console.log(person[propertyOfPerson]);
// }

//Object.keys()

// for (let key of Object.keys(person)) {
//     console.log(person[key]);
// }

//Objects.values()

// for (let valueOfProperty of Object.values(person)) {
//     console.log(valueOfProperty);
// }

//Object.entries()

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}
