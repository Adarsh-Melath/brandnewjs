class Bank {
    constructor(accountHolder) {
        let _accountHolder = accountHolder;
        let _balance=0;

        this.getName = function () {
            return _accountHolder;
        };

        this.getBalance = function () {
            return _balance;
        };

        this.setName = function (name) {
            _accountHolder = name;
        };

        this.setBalance = function (amount) {
            if (amount > 0) _balance = amount;
        };
    }
}

const account1 = new Bank('Adarsh');
account1.setBalance(-100);
account1.setBalance(400);
console.log(account1.getBalance());
