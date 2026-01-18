class Sum {
    sum(number1, number2) {
        return number1 + number2;
    }

    sum(number1, number2, number3) {
        return number1 + number2 + number3;
    }
}

const sumClass = new Sum();
console.log(sumClass.sum(10,20));
