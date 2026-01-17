const person = {
    name: 'Adarsh',
    age: 18,
};

const logDetails = function () {
    console.log(this.name, this.age);
};

logDetails.bind(person)();
