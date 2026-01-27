// Polymorphism: the ability of different classes to be treated as instances of the same class through a common interface.

class Person {
    getSleep() {
        console.log("I'm a normal happy person. I need 8 hours of sleep.")
    }
}

class Student extends Person {
    getSleep() {
        console.log("I'm a student. I need 7 hours of sleep.")
    }
}

class Developer extends Person {
    getSleep() {
        console.log("I'm a developer. I need 6 hours of sleep.")
    }
}

const getSleepingHours = (person: Person) => {
    person.getSleep();
}

const person1 = new Person();
const student1 = new Student();
const developer1 = new Developer();

getSleepingHours(person1);
getSleepingHours(student1);
getSleepingHours(developer1);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }

    getArea(): number {
        return this.length * this.width;
    }
}

const getArea = (param: Shape) => {
    console.log("Area:", param.getArea());
}

const circle1 = new Circle(5);
const rectangle1 = new Rectangle(4, 6);
const shape1 = new Shape();

getArea(circle1);
getArea(rectangle1);
getArea(shape1);