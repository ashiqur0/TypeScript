//* ? Ternary Operator: 
//* ?? Nullish Coalescing Operator:
//* ?. Optional Chaining Operator:

// Example usage of the ternary operator
const isEligibleToMarry = (age: number): string => {
    return age >= 21 ? 'Eligible to marry' : 'Not eligible to marry';
}
console.log(isEligibleToMarry(25)); // Eligible to marry
console.log(isEligibleToMarry(18)); // Not eligible to marry

// Example usage of the nullish coalescing operator: works with null and undefined value only
const getUserName = (name: string | null | undefined): string => {
    return name ?? 'Guest User';
}
console.log(getUserName('Alice')); // Alice
console.log(getUserName(null));    // Guest User
console.log(getUserName(undefined)); // Guest User