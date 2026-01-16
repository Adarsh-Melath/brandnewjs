const num1 = 10;
const num2 = 1;

try {
    if (num2 == 0) {
        throw new Error('cannot divide by zero');
    }
    const result = num1 / num2;
    console.log(result);
} catch (error) {
    console.error(error);
}
