// logical operator
let a = true;
let b = true;
if (a && b) {
    console.log('both are true');
} else {
    console.log('at least one is false');
}

let c = false;
let d = false;

if (c || d) {
    console.log('at least one is true');
} else {
    console.log('Both are false');
}

let e = true;
if (!e) {
    console.log('true');
} else {
    console.log('false');
}
