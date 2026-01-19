const person1 = {
    name: 'Adarsh',
};

const person2 = {
    name: 'Fayas',
};

const person3 = {
    name: 'Sreerag',
};

const printName = function (message) {
    return `${this.name} ${message}`;
};

console.log(printName.call(person1, 'call method'));

console.log(printName.apply(person2, ['apply method']));

console.log(printName.bind(person3, 'bind method')());
