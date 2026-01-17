function Dog(name, color) {
    this.name = name;
    this.color = color;

    this.eat = function () {
        console.log(`${this.name} is eating.`);
    };

    this.bark = function () {
        console.log(`${this.name} is barking.`);
    };
}

const dog1 = new Dog('A', 'Brown');
const dog2 = new Dog('B', 'Black');

console.log(dog1.name);
dog1.eat();
console.log(dog1);
