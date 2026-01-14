// function outerFunction() {
//     let outerVariable = 'I am from the outer function';
//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     innerFunction();
// }

// outerFunction();

//closure example
function outerFunction() {
    let outerVariable = 'I am Outer Variable';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const innerFunction = outerFunction();
innerFunction();
