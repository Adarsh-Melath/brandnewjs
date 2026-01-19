const person = {
    name: 'Adash',
    logName: () => console.log(this.name),
};

person.logName();

const person1 = {
    name: 'Fayas',
    logName() {
        console.log(this);
        const logNameArrow = () => {
            console.log(this.name);
        };
        logNameArrow();
    },
};

person1.logName();