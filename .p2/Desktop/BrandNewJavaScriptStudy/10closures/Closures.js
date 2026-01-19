//closure example
// function outerFunction() {
//     let x = 10;

//     return function innerFunction() {
//         console.log(x);
//     };
// }

// const innerFunction = outerFunction();
// innerFunction();

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
