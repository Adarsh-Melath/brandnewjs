// "this" in global scope

// console.log(this); //window object in browser but in our vscode's console it will give like :{}

// "this" in functional context

function x() {
    console.log(this); //undefined in strict mode and in normal mode it will give window object
}

// x();

//"this" in object method

const club = {
    name: 'Real Madrid',
    established: 1902,
    getDetails: function () {
        console.log(this); //club object
        console.log(`${this.name} was established in ${this.established}`);
    },
};

// club.getDetails();
// const full = club.getDetails;
// full();

//"this" in constructor function

function Country(name, founded) {
    this.name = name;
    this.founded = founded;
    console.log(this)
    this.info = function () {
        console.log(`${this.name} was founded in ${this.founded}`);
    };
}

const country1 = new Country('India', 1947);
country1.info();
