// Inheritance: 

// parent class
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // common
    getStudy(studyHour: number): string {
        return `${this.name} is studying for ${studyHour} hours.`;
    }
}

// child class 1: here no propert
class Student extends Parent {
}

// child class 2
class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    // common
    getStudy(studyHour: number): string {
        return `${this.name} is studying for ${studyHour} hours.`;
    }

    // own
    takeClass(classHour: number): string {
        return `${this.name} is taking class for ${classHour} hours.`;
    }
}

const student = new Student("Sondesh", 16, "Kathmandu");
console.log(student.getStudy(5)); // Output: Sondesh is studying for 5 hours.

const teacher = new Teacher("Bahadur", 35, "Kathmandu", "Math Teacher");
console.log(teacher.getStudy(3)); // Output: Bahadur is studying for 3 hours.
console.log(teacher.takeClass(4)); // Output: Bahadur is taking class for 4 hours.
