numbers.reverse();
const newNumbers = numbers.map((number, index) => {
    if (index < numbers.length / 2) {
        return number * 2;
    } else {
        return number * 5;
    }
});