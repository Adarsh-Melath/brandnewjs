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

const count = false;

const promise = new Promise((resolve, reject) => {
    if (count) {
        resolve('count is true');
    } else {
        reject('count is false');
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
