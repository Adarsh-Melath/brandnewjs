const person = {
    name: 'Adarsh',
    age: 18,
};

const logDetails = function (hobby, favFood) {
    console.log(this.name, this.age, hobby, favFood);
};

logDetails.apply(person, ['coding', 'chicken biriyani']);
