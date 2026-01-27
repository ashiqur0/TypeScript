// Type Guard: A type guard is a runtime check that guarantees the type of a variable within a certain scope.

// typeof Type Guard / type narrowing
type AlphaNumeric = number | string;

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

console.log(add(5, 10)); // Output: 15
console.log(add("Hello, ", "World!")); // Output: Hello, World!
console.log(add(5, " apples")); // Output: 5 apples

// in guard: if the property exists in the object
type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "Admin";
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
        return `I am ${user.name} and my role is ${user.role}`;
    } else {
        return `I am ${user.name} and I am a normal user.`;
    }
}

const normalUser: NormalUser = { name: "Sondesh" };
const adminUser: AdminUser = { name: "Bahadur", role: "Admin" };

console.log(getUserInfo(normalUser)); // Output: I am Sondesh and I am a normal user.
console.log(getUserInfo(adminUser)); // Output: I am Bahadur and my role is Admin

// instanceof guard: if the object is an instance of a class
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getSleep(hours: number) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} is studying for ${numberOfHours} hours.`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} is teaching for ${numberOfHours} hours.`);
    }
}

const getUserInfo2 = (user: Person) => {
    if (user instanceof Student) {
        user.doStudy(5);
    } else if (user instanceof Teacher) {
        user.takeClass(4);
    } else {
        user.getSleep(8);
    }
};

const student1 = new Student("Mr. Jack");
const teacher1 = new Teacher("Miss. Jenny");
const person1 = new Person("John Doe");

getUserInfo2(student1); // Output: Mr. Jack is studying for 5 hours.
getUserInfo2(teacher1); // Output: Miss. Jenny is teaching for 4 hours.
getUserInfo2(person1);  // Output: John Doe is sleeping for 8 hours.

// Function Guard: to check if a variable is a function before calling it
const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const handleUser = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(3);
    } else if (isTeacher(user)) {
        user.takeClass(2);
    } else {
        user.getSleep(6);
    }
}

handleUser(student1); // Output: Mr. Jack is studying for 3 hours.
handleUser(teacher1); // Output: Miss. Jenny is teaching for 2 hours.
handleUser(person1);  // Output: John Doe is sleeping for 6 hours.