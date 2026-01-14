// const callback = (name = 'Guest') => {
//     console.log(name + ' is entered!');
// };

// setTimeout(() => callback('John'), 5000);

// const callback = () => {
//     console.log('I am callback function');
// };

// function higherOrderFunction(callback) {
//     console.log('I am Higher Order function');
//     callback();
// }

// higherOrderFunction(callback);

const sum = (num1, num2) => {
    return num1 + num2;
};

const difference = (num1, num2) => {
    return num1 - num2;
};

const calculation = (logic, num1, num2) => {
    return logic(num1, num2);
};
console.log(calculation(sum, 10, 20));
console.log(calculation(difference, 30, 20));
