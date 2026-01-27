const person = {
    name: 'Adarsh',
    age: 18,
    address: {
        street: 'Btm',
        city: 'Banglore',
    },
};

console.log(person.address.street);
console.log(person.address?.street);
console.log(person.address.pincode);
console.log(person.address?.pincode);

person.address.street = 'bmw';
console.log(person.address?.street);