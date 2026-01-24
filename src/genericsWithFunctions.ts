// Generics With Functions

const createArrayWithGeneric = <T>(value: T): T[] => [value];
const arrStr = createArrayWithGeneric<string>('Hello World');
const arrNum = createArrayWithGeneric<number>(42);
const arrBol = createArrayWithGeneric<boolean>(true);
const arrObj = createArrayWithGeneric<object>({ key: 'value' });

console.log(arrStr);
console.log(arrNum);
console.log(arrBol);
console.log(arrObj);

// Generics With Tuples
const createTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => [param1, param2];
const arrTuple = createTupleWithGeneric<string, number>('Tanzid', 48);
console.log(arrTuple);