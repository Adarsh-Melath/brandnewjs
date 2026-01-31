//test case
/*
Array 1: [1, 2, 3, 4, 5]
Array 2: [3, 4, 5, 6, 7]
Output: [3, 4, 5]
*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) {
            commonElements.push(array1[i]);
        }
    }
}


console.log(commonElements);