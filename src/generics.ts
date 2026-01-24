// Generics: dynamically generalize

// Generic Array
type GenericArray<T> = Array<T>;

// const names: string[] = ['Arif', 'Tanzid', 'Samiul'];
const names: GenericArray<string> = ['Arif', 'Tanzid', 'Samiul'];
const numbers: GenericArray<number> = [29, 48, 1];
const eligibilities: GenericArray<boolean> = [true, false, false];

console.log(names);
console.log(numbers);
console.log(eligibilities);

// Generic Array of Objects
const userList: GenericArray<{ name: string; age: number }> = [
    { name: 'Arif', age: 29 },
    { name: 'Tanzid', age: 22 },
    { name: 'Samiul', age: 24 },
];
console.log(userList);