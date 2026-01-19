class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    display = function () {
        console.log(this.name, this.email, this.age);
    };

    static livingSpace = 'earth';

    static printLivingSpace = () => {
        console.log(this.livingSpace);
    };
}

const user1 = new User('Adarsh', 'adarsh@gmail.com', 18);

user1.display();
User.printLivingSpace();