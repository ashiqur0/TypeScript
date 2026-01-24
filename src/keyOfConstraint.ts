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

