//example of a variable'hoisting declared using var

console.log(myVar);
var myVar = 5;
console.log(myVar);

//example of a variable'hoisting declared using let,const

// console.log(myLet);
// let myLet = 5;

// console.log(myConst);
// const myConst = 5;

//example of function expression hoisting
console.log(myFunctionExpression);
// myFunctionExpression("hello");
var myFunctionExpression = function (name) {
    console.log(name);
};

//example of function declaration hoisting
console.log(myFunctionDeclaration);
myFunctionDeclaration('hello');

function myFunctionDeclaration(name) {
    console.log(name);
}
