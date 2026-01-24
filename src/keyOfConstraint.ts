// keyof operator:

type RichPeopleVehicle = {
    car: string
    yacht: string,
    jet: string,
}

// union type / literal type
type MyVehicle1 = 'car' | 'yacht' | 'jet';
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle1: MyVehicle1 = 'car';
const myVehicle2: MyVehicle2 = 'yacht';
// const myVehicle3: MyVehicle2 = 'ship'; // error

type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}

const user: User = {
    id: 1009,
    name: "Ashiqur Rahman",
    address: {
        city: 'Bogura'
    }
}
const myName1 = user.name;      // dot notation
const myName2 = user['name'];   // bracket notation

const getPropertyFromObject = <T>(obj: T, key: keyof T) => {
    return obj[key];
}

const result = getPropertyFromObject(user, 'id');
// const result2 = getPropertyFromObject(user, 'emni'); // error
console.log(result); // 1009

const product = {
    brand: 'HP'
}

const student = {
    name: 'Ashiqur Rahman',
    id: 1009
}

const result3 = getPropertyFromObject(product, 'brand');
const result4 = getPropertyFromObject(student, 'name');

console.log({ result3, result4 });