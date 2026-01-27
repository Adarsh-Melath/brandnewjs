const object = {
    name: 'adarsh',
    age: 18,
    city: 'delhi',
};

object.profession = 'Tech lead';
// console.log(object);

const sealedobj = Object.seal(object);

// object.profession = 'Software engineer';
// object.experience = 10;
// console.log(object);
