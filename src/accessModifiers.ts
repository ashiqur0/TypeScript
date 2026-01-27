// Access Modifiers: readonly, public, private

class BankAccount {
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

class StudentBankAccount extends BankAccount {
    constructor(userId: number, userName: string, balance: number) {
        super(userId, userName, balance);
    }

    test() {
        this.bankName = 'CS Campus Bank'; // Allowed: public
    }
}

const myAccount = new StudentBankAccount(1009, 'Ashiqur Rahman', 5000);
myAccount.addBalance(1501);
myAccount.test();
console.log(myAccount)