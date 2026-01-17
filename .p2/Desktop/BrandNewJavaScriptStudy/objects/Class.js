class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    display() {
        console.log(this.name, this.email, this.age);
    }
}

const user1 = new User('Adarsh', 'adarsh@gmail.com', 18);

user1.display();
