//Object literals
let name = 'Adarsh';
let course = 'Java Spring Boot';

const obj1 = {
    name: name,
    course: course,
};

//we can write same above code like this
const obj2 = {
    name,
    course,
};

const obj3 = {
    [name]: 'Adarsh Melath',
};

// console.log(obj3['Adarsh']);

const obj4 = {
    greet: function (name) {
        console.log('Hello ' + name);
    },
};

// obj4.greet('Adarsh');

//the above same code can write like this

const obj5 = {
    greet(name) {
        return 'Hello ' + name;
    },
};

// console.log(obj5.greet('Adarsh'));

let studentName = 'Adarsh';
let studentCourse = 'Java Spring Boot';

function student(naem, course) {
    return {
        name,
        course,
    };
}

// console.log(student(studentName, studentCourse));

//Object constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
};

const person1 = new Person('Adarsh', 25);
const person2 = new Person('Albin', 26);

person1.greet();
person2.greet();
