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

// Generics With Object
const addStudentToCourse = <T>(studentInfo: T): T & { course: string } => {
    return {
        course: 'Next Level',
        ...studentInfo
    }
}

const student1 = {
    name: 'Tanzid Mondol',
    roll: 48,
    batch: '23rd',
    department: 'CSE',
    university: 'Pundra University of Science & Technology'
}

const student2 = {
    name: 'Samiul Islam',
    roll: 12
}

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);;
console.log(result);
console.log(result2);