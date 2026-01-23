//* ? Ternary Operator: 
//* ?? Nullish Coalescing Operator:
//* ?. Optional Chaining Operator:

// Example usage of the ternary operator
const isEligibleToMarry = (age: number): string => {
    return age >= 21 ? 'Eligible to marry' : 'Not eligible to marry';
}
console.log(isEligibleToMarry(25)); // Eligible to marry
console.log(isEligibleToMarry(18)); // Not eligible to marry