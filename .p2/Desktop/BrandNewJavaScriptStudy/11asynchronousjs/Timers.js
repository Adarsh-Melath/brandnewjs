//setTimeout()
// console.log('Start');
const setTimeoutId = setTimeout(() => {
    // console.log('Delayed for 2 seconds');
}, 2000);
// console.log('End');

//setInterval()
const setIntervalId = setInterval(() => {
    // console.log('I will print in every 2 seconds');
},1000);

clearInterval(setIntervalId);