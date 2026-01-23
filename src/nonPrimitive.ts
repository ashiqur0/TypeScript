// Non-Primitive Types in TypeScript
// Non-primitive types include objects, arrays, functions, etc.

// Example of an object type
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};

// Example of an array type
let numbers: number[] = [1, 2, 3, 4, 5];

// Example of a function type
let greet: (name: string) => string = function(name: string): string {
    return `Hello, ${name}!`;
};

// Using the non-primitive types
console.log(person.name); // Output: Alice
console.log(numbers[0]);  // Output: 1
console.log(greet("Bob")); // Output: Hello, Bob!

// Example of a class type
class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    displayInfo(): string {
        return `${this.make} ${this.model}`;
    }
}

let myCar: Car = new Car("Toyota", "Corolla");
console.log(myCar.displayInfo()); // Output: Toyota Corolla

// Example of a tuple type
let tuple: [string, number] = ["Age", 25];
console.log(`${tuple[0]}: ${tuple[1]}`); // Output: Age: 25

// Example of an interface type
interface Animal {
    species: string;
    sound(): string;
}

let dog: Animal = {
    species: "Dog",
    sound: function(): string {
        return "Woof!";
    }
};

console.log(dog.species); // Output: Dog
console.log(dog.sound());  // Output: Woof!

// Example of a union type
let value: string | number;
value = "Hello";
console.log(value); // Output: Hello
value = 42;
console.log(value); // Output: 42

// Literal types, optional properties, and readonly properties
const student: {
    university: 'PUB';  // Literal type
    department?: string; // Optional property
    readonly location: string;  // Readonly property
    name: string;
    roll: number;
    isPassed: boolean;
} = {
    // university: 'Pundra University of Science & Technology', // This will cause an error
    university: 'PUB',
    location: 'Bogura',
    name: "John Doe",
    roll: 101,
    isPassed: true
}
// student.location = 'Dhaka'; // This will cause an error because location is readonly
console.log(student);