// Generics With Functions

const createArrayWithGeneric = <T>(value: T): T[] => [value];
const arrStr= createArrayWithGeneric<string>('Hello World');
const arrNum = createArrayWithGeneric<number>(42);
const arrBol = createArrayWithGeneric<boolean>(true);
const arrObj = createArrayWithGeneric<object>({ key: 'value' });

console.log(arrStr);