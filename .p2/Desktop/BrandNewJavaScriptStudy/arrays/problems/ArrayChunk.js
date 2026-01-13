const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkArray = new Array();

function chunkArrayFn(arr, size) {
    for (let i = 0; i < data.length; i += size) {
        chunkArray.push(arr.slice(i, i + size));
    }
    return chunkArray;
}

console.log(chunkArrayFn(data, 3));
