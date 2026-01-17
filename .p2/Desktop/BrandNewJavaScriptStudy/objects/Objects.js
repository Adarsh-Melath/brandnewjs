//two ways of defining objects

//1: Using Object literals

const obj1 = {
    name: 'abc',
};

console.log(obj1);

//new Object() constructor

const obj2 = new Object();

obj2.name = 'abc';
obj2.age = 18;
console.log(obj2);

//removing a property from the obj
delete obj2.age;
console.log(obj2);

//checking if a property exist or not

console.log(obj2.hasOwnProperty('name'));
console.log(obj2.hasOwnProperty('age'));


console.log('name' in obj2);