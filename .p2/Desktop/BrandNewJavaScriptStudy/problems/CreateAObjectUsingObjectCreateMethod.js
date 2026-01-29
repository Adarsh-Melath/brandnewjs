const object1 = {
    name: 'Adarsh',
};

console.log(object1);

const object2 = Object.create(object1);
object2.name = 'Melath';

console.log(object2);
