const numbers = [155, 101, 17711, 100];

function count1(...numbers) {
    return numbers.map(
        (number) =>
            number
                .toString()
                .split('')
                .filter((element) => element == 1).length,
    );
}

console.log(count1(...numbers));
