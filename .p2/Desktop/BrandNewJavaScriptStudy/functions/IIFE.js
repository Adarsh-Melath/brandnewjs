(function () {
    console.log('This is an Immediately Invoked Function Expression (IIFE)');
})();

//use case of IIFE

// - to declare a local scope variable

var outerVariable = 'I am Outer Variable';

(function () {
    var innerVariable = 'I am Inner Variable';
    console.log(outerVariable);
    console.log(innerVariable);
})();

console.log(outerVariable);
// console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined

