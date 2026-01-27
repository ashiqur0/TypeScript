// Encapsulation: Restrict direct access to some of an object's components, which can prevent the accidental modification of data.

class BankAccountN {
    public readonly userId: number; // can be accessed from anywhere, but cannot be modified
    public userName: string; // can be accessed and modified from anywhere
    private balance: number; // can only be accessed and modified within the class
    protected bankName: string = 'TypeScript Bank'; // can be accessed within the class and subclasses

    constructor(userId: number, userName: string, balance: number) {
        this.userId = userId;
        this.userName = userName;
        this.balance = balance;
    }

    addBalance(amount: number): void {
        this.balance += amount;
        console.log(`New balance after adding ${amount} is ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
}

class StudentBankAccountN extends BankAccountN {
    constructor(userId: number, userName: string, balance: number) {
        super(userId, userName, balance);
    }

    test() {
        this.bankName = 'CS Campus Bank'; // Allowed: protected
    }
}

const myAccount = new StudentBankAccountN(1009, 'Ashiqur Rahman', 5000);
myAccount.addBalance(1501);
myAccount.test();
console.log(myAccount)