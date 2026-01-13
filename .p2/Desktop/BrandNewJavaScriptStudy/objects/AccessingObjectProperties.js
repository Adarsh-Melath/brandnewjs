const student = {
    name: 'Adarsh',
    course: 'Java Spring Boot',
};

//using dot operator

console.log(student.name);
console.log(student.course);

//using bracket notation

console.log(student['name']);
console.log(student['course']);

//object destructuring

const { name, course } = student;
console.log(name);
console.log(course);
