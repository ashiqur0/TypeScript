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

// Generic Tuple
type GenericTuple<X, Y> = [X, Y];

const user: GenericTuple<string, number> = ['Arif', 29];
const userInfo: GenericTuple<object, string> = [{ name: 'Tanzid', age: 22 }, 'Active'];

console.log(user);
console.log(userInfo);

// Generic Function
function getSearchProducts<T>(products: T[]): T {
    // Do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
};

const result1 = getSearchProducts<string>(['Laptop', 'Mobile', 'Tablet', 'Monitor', 'Keyboard']);
const result2 = getMoreSearchProducts<number>([10, 20, 30, 40, 50, 60]);

console.log(result1);
console.log(result2);

// Generic Function with multiple type parameters
function displayType<X, Y>(param1: X, param2: Y): void {
    console.log(`Type of param1: ${typeof param1}, Value: ${param1}`);
    console.log(`Type of param2: ${typeof param2}, Value: ${param2}`);
}

displayType<string, number>('Hello', 100);
displayType<boolean, object>(true, { key: 'value' });