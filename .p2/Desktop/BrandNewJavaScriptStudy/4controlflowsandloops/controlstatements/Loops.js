//for
//syntax
// for (initialization; condition; afterthought)
// { statement};
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

//while
let j = i;
while (j <= 10) {
    console.log(j);
    j++;
}

// do-while
let k = j;
do {
    console.log(k);
    k++;
} while (k <= 15);

//label,break,continue(Jump statements)

let theValue = 5;
//break without label
for (let i = 1; i <= 10; i++) {
    if (theValue == i) {
        console.log(theValue + ' is found');
        break;
    }
}

//break with label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
    console.log('Outer loops ' + x);
    x++;
    z = 1;
    while (true) {
        console.log('Inner loop ' + x + ' ' + z);
        z++;
        if (z === 10 && x === 10) {
            break labelCancelLoops;
        } else if (z === 10) {
            break;
        }
    }
}

//continue without label
for (let index = 1; index <= 10; index++) {
    if (index == 3) {
        continue;
    }
}

//continue with label
let a = 0;
let b = 10;
CheckIandJ: while (a < 4) {
    console.log(a);
    a++;
    CheckJ: while (b > 4) {
        console.log(b);
        b--;
        if (b % 2 === 0) {
            continue;
        }
        console.log(b + ' is odd');
    }
    console.log('a ', a);
    console.log('b ', b);
}

// for-in
const students = [
    { name: 'Adarsh', age: 20 },
    { name: 'Albin', age: 21 },
];

function printStudentsName(students) {
    return students.map((student) => student.name).join(', ');
}

console.log(printStudentsName(students));

//for loop
const names = ['Adarsh', 'Albin', 'Akhil'];

for (let name of names) {
    console.log(name);
}
