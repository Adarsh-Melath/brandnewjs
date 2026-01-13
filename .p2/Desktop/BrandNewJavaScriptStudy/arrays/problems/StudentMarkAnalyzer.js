const students = [
    { name: 'Amit', marks: 85 },
    { name: 'Ravi', marks: 42 },
    { name: 'Neha', marks: 76 },
    { name: 'Priya', marks: 33 },
];

const names = students.filter((student) => student.marks >= 40);
console.log(names);

const avgMark =
    students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(avgMark);

const allNames = students.map((student) => student.name);
console.log(allNames);
