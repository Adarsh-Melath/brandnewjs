// Arithmetic
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num1++); // post-increment
console.log(++num1); // pre-increment
console.log(num2--);
console.log(--num2);

// Assignment
let num3 = 10;
console.log((num3 += 5)); // 15
console.log((num3 -= 5)); //10
console.log((num3 *= 5)); //50
console.log((num3 /= 5)); //10
console.log((num3 %= 5)); //0
console.log((num3 **= 5)); //0

// comparison
let num4 = 3;
let num5 = 2;

console.log(num4 == num5); //false
console.log(num4 > num5); //true
console.log(num4 < num5); //false
console.log(num4 != num5); //true

let num6 = '1';
let num7 = 1;
console.log(num6 == num7); //true
console.log(num6 === num7); //false
