const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const counter = words.reduce((acc, word) => {
    if (acc[word]) {
        acc[word]++;
    } else {
        acc[word] = 1;
    }
    return acc;
}, {});

console.log(counter);
