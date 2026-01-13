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

console.log(student(studentName, studentCourse));
