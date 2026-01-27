// Getter and Setter: This module provides functions to get and set values in an object using a specified key.

class BankAccount {

    public readonly userId: number; 
    public userName: string; 
    private _userBalance: number; 

    constructor(userId: number, userName: string, _userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = _userBalance;
    }

    // // set balance
    // addBalance(amount: number): void {
    //     this._userBalance = this._userBalance + amount;
    // }

    // // get balance
    // get_userBalance(): number {
    //     return this._userBalance;
    // }

    // using getter and setter
    set addBalance(amount: number) {
        this._userBalance = this._userBalance + amount;
    }

    get get_userBalance(): number {
        return this._userBalance;
    }
}

class StudentBankAccount extends BankAccount {    
}

const myAccount = new BankAccount(1009, 'Ashiqur Rahman', 100);
// myAccount.addBalance(1500);
// console.log(myAccount.get_userBalance());

myAccount.addBalance = 20;  //update balance by adding 20
console.log(myAccount);