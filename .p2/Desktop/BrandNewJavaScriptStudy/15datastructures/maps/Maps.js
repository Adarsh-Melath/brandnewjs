const map = new Map();

map.set('name', 'John');

console.log(map.has('name'));

//converting map keys to set

let userScores = new Map([
    ['Alice', 85],
    ['Bob', 90],
    ['Charlie', 78],
]);

let uniqueUsers = new Set(userScores.keys());
console.log(uniqueUsers);

//converting map value to set

let scoreSet = new Set(userScores.values());
console.log(scoreSet);

//converting map to an object

let userObj = Object.fromEntries(userScores);
console.log(userObj);

//converting object to a Map

let convertedUserScores = new Map(Object.entries(userObj));
console.log(convertedUserScores);


console.log(map.size);


//iterating over a Map using forEach

userScores.forEach((key, value) => {
    console.log(`${key}: ${value}`);
    
})