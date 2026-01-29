//questions:  Merge two arrays without inbuilt methods and with inbuilt methods.

//without in built

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [];

let sizeOfArray1 = array1.length;
let sizeOfArray2 = array2.length;

for (let i = 0; i < sizeOfArray1; i++) {
    mergedArray[i] = array1[i];
}

for (let i = 0; i < sizeOfArray2; i++) {
    mergedArray[sizeOfArray1 + i] = array2[i];
}
console.log(mergedArray);
