const original = {
    name: 'Adarsh',
    details: {
        age: 18,
        city: 'Delhi',
    },
};

const copy = { ...original };

console.log(original);
console.log(copy);

copy.details.city = 'Kasaragod';
console.log(original);
console.log(copy);
