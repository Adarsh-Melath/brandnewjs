let n = 5;

if (n < 2) {
    return;
}

for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    if (isPrime == true) console.log(num);
}
