class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    eat() {
        console.log('Animal eats');
    }

    drink() {
        console.log('Animal drinks');
    }

    makeSound() {
        console.log('Animal makes sound');
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(name, color);
    }

    makeSound() {
        console.log('Dogs barks');
    }
}

const dog1 = new Dog('Charlie', 'white');
dog1.makeSound();
dog1.eat(); dog1.drink();