const promise = new Promise((resolve, reject) => {
    let result = true;

    if (result === true) {
        resolve('Success');
    } else {
        reject('Error');
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
