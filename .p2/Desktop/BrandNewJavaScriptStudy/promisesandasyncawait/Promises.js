//Promise example 1:

// const PromiseExample = (time) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('done after ' + time + 'ms');
//         }, time);
//     });
//     return promise;
// };

// PromiseExample(5000)
//     .then((resolve) => {
//         console.log(resolve);
//     })
//     .then(() => {
//         console.log('finished!');
//     });

//Promise example 2:

// const count = false;
// const promise = new Promise((resolve, reject) => {
//     if (count) {
//         resolve('count is true');
//     } else {
//         reject('count is false');
//     }
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

//factorial using promise

// function factorial(number) {
//     const promise = new Promise((resolve) => {
//         let fact = 1;

//         for (let i = number; i >= 1; i--) {
//             fact *= i;
//         }

//         resolve(fact);
//     });

//     return promise;
// }

// factorial(5).then((result) => {
//     console.log(result);
// });

//Promise methods

const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

Promise.all([p1, p2, p3])
    .then((message) => {
        // console.log(message);
    })
    .catch((error) => {
        // console.log(error);
    });

Promise.allSettled([p1, p2, p3])
    .then((result) => {
        // console.log(result);
    })
    .catch((error) => {
        // console.log(error);
    });

Promise.any([p1, p2, p3])
    .then((result) => {
        // console.log(result);
    })
    .catch((error) => {
        // console.log(error);
    });

Promise.race([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
