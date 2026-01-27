// Type Guard: A type guard is a runtime check that guarantees the type of a variable within a certain scope.

// typeof Type Guard
const add = (num1:number | string, num2:number | string) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

console.log(add(5, 10)); // Output: 15
console.log(add("Hello, ", "World!")); // Output: Hello, World!
console.log(add(5, " apples")); // Output: 5 apples