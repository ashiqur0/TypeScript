// Function 

// Regular Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log('Sum: ', add(5, 10)); // Output: 15

// Arrow Function
const multiply = (num1: number, num2: number): number => num1 * num2;
console.log('Product: ', multiply(5, 10)); // Output: 50

// Object Method 
const user = {
    name: 'Ashiqur',
    balance: 0,
    addBalance(amount: number): void {
        this.balance += amount;
    }
}

user.addBalance(100);
console.log('Balance: ', user.balance); // Output: 100

// Callback Function
const arr: number[] = [1, 2, 3, 4, 5];
const squaredArr = arr.map((num: number): number => num * num);

console.log('Squared Array: ', squaredArr); // Output: [1, 4, 9, 16, 25]