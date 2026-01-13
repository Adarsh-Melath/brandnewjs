//creation of array

const fruits = ['Apple', 'Banana', 'Mango', 'Pineapple'];

//accessing array elements using index

console.log(fruits[0]);
console.log(fruits[1]);

//adding elements to the array

fruits.push('Orange'); //it will add the new element to the end
fruits.unshift('Grapes'); //it will add the new element to the beginning

console.log(fruits); //output: [ 'Grapes', 'Apple', 'Banana', 'Mango', 'Pineapple', 'Orange' ]

//remove elements from the array

fruits.pop(); //this will remove the last element from array
fruits.shift(); //this will remove the first element from array

console.log(fruits); //output ['Apple', 'Banana', 'Mango', 'Pineapple'];

fruits.splice(1, 1); //this will remove the element from array at index 1 and 1 element only
console.log(fruits); //[ 'Apple', 'Mango', 'Pineapple' ]

// concatenating arrays

const vegetables = ['Carrot', 'Broccoli', 'Spinach'];

const combinedArray = fruits.concat(vegetables);
console.log(combinedArray); //[ 'Apple', 'Mango', 'Pineapple', 'Carrot', 'Broccoli', 'Spinach' ]

//toString method: //Converts an array to a string of (comma-separated) array values.

console.log(combinedArray.toString());

//indexOf()	:Searches an element of an array and returns its position (index).

console.log(combinedArray.indexOf('Apple')); //output: 0
console.log(combinedArray.indexOf('Orange')); //output : -1 (not found)

//find : Returns the value of the first element in an array that pass a test.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.find((num) => num > 5)); //output : 6

// findIndex(): Returns the first index of the array element that passes a given test.

console.log(numbers.findIndex((num) => num > 5)); //output 5

//forEach() : Calls a function for each array element.

numbers.forEach((num) => console.log(num));

// includes()	Checks if an array contains a specified element.
console.log(numbers.includes(5)); //true
console.log(numbers.includes(15)); //false

// sort()	Sorts the elements alphabetically in strings and ascending order in numbers.

console.log(numbers.sort((a, b) => b - a)); //descending order

//slice():Selects part of an array and returns it as a new array.

console.log(numbers.slice(2, 5)); //[ 8,7,6 ]


//length property: returns the length of the array

console.log(numbers.length)//10