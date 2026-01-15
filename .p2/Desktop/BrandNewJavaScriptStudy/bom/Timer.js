const sayHello = () => {
    console.log('Hello World');
};

const timeout = setTimeout(sayHello, 3000);
clearTimeout(timeout);

const timeIntervalId = setInterval(sayHello, 1000);
clearInterval(timeIntervalId);