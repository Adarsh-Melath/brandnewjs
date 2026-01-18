const PromiseExample = (time) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done after ' + time + 'ms');
        }, time);
    });
    return promise;
};

PromiseExample(5000)
    .then((resolve) => {
        console.log(resolve);
    })
    .then(() => {
        console.log('finished!');
    });
