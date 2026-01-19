//if-else
let userName = 'Albin';
if (userName === 'Adarsh') {
    console.log('Hello ' + userName);
} else {
    console.log('Hello Guest');
}

//switch
let color = 'Green';

switch (color) {
    case 'red':
        console.log('Stop!');
        break;
    case 'Green':
        console.log('Go!');
        break;
    default:
        console.log('Broken Light');
        break;
}

//ternary operator

const trafficSignal = 'Red';
console.log(trafficSignal == 'Green' ? 'Go!' : 'Stop!');
