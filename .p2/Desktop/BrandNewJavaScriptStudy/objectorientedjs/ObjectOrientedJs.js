//encapsulation

class MyCar {
    constructor(brand, color) {
        (this.brand = brand), (this.color = color);
    }

    startEngine() {
        console.log(`${this.brand} engine started!`);
    }
}

const car1 = new MyCar('Toyota', 'Red');

car1.startEngine();

//abstarction

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;

        let _balance = balance;

        this.checkBalance = () => {
            console.log(`Current balance: ${_balance}`);
        };

        this.deposit = (amount) => {
            if (amount > 0) {
                _balance += amount;
                console.log(
                    `${amount} deposited successfully! Current balance ${_balance}`
                );
            } else {
                console.log('Deposit amount must be positive!');
            }
        };

        this.withdraw = (amount) => {
            if (amount > 0 && amount <= _balance) {
                _balance -= amount;
                console.log(
                    `${amount} withdrawn successfully! Current balance ${_balance}`
                );
            } else {
                console.log('Invalid withdrawal amount!');
            }
        };
    }
}

const account = new BankAccount('123456789', 1000);

account.checkBalance();
account.withdraw(300);
account.deposit(500);

//inheritance  and polymorpshim

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    speaking() {
        console.log(`${this.name} is making a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speaking() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speaking() {
        console.log(`${this.name} meows`);
    }
}
const dog = new Dog('Buddy');
const cat = new Cat('Bunny');
dog.eat();
dog.speaking();

cat.eat();
cat.speaking();

//static method

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static printDetails(user) {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    }
}

const user1 = new User('Adarsh', 18);
// user1.printDetails();
User.printDetails(user1);
