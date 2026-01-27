// (function () {
//     console.log('Hello Guys!');
// })();

//Example 1 - Hiding variables

(() => {
    var message = "Hey What's up";
})();

// console.log(message); //ReferenceError: message is not defined

//Example 2 - Passing in global objects
let num = 0;
console.log(num);
(() => {
    num++;
})(num);
console.log(num);
