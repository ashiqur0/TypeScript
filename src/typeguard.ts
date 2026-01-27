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