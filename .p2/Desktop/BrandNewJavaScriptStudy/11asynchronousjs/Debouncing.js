function debounce(fun, delay) {
    let timeout = null;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => fun(...args), delay);
    };
}

function fun(a, b) {
    console.log(`This is a function with arguments ${a} and ${b}`);
}
const debouncedFun = debounce(fun, 5000);

debouncedFun(1, 2);
