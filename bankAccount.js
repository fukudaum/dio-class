class bankAccount {
    constructor(agency, number, type) {
        this.agency = agency;
        this.number = number;
        this.type = type;
    }

    get balance() {
        return this.balance;
    }

    set balance(value) {
        this.balance = value;
    }

    deposit(value) {
        this.balance = this.balance + value;
        return this.balance;
    }

    withdraw(value) {
        if (value > this.balance) {
            throw new Error("Withdraw denied, not enough balance!")
        }

        this.balance = this.balance - value;
        return this.balance;
    }
}

class checkingAccount extends bankAccount {
    constructor(agency, number, creditCard) {
        super(agency, number);
        this.type = 'checking account';
        this.creditCard = creditCard;
    }

    set creditCard(value) {
        this.creditCard = value;
    }

    get creditCard() {
        return this.creditCard;
    }
}

class savingsAccount extends bankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'savings account';
    }

    set creditCard(value) {
        this.creditCard = value;
    }

    get creditCard() {
        return this.creditCard;
    }
}

class universityAccount extends bankAccount {
    constructor( agency, number ) {
        super( agency, number );
        this.type = "university account";
    }

    withdraw(value) {
        if (value < 500) {
            this.balance = balance - value;
            return this.balance;
        }        
        throw new Error("Cant withdraw 500 or more")
    }
}