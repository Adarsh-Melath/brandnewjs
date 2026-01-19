async function f() {
    // console.log('Hey I am Async function');
    return Promise.resolve(1);
}

f().then((result) => {
    // console.log(result);
});

let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise resolved');
    }, 5000);
});

async function asyncFunction() {
    let result = await promise;
    // console.log(result);
    // console.log('hello');
}

asyncFunction();

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Hey! this promise gotta rejected');
    },5000);
});

async function asyncFunction2() {
    try {
        let result = await promise2;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


asyncFunction2();