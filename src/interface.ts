// Interface Type: Similar as Type Alias. Use for non-primitive types like object, array, function, class

// Interface with Object Type
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
    getDetails: () => string; // method signature
}

interface Role {
    role: string;
    permissions: string[];
}

interface UserWithRole extends User, Role {} // Interface Inheritance

const user1: UserWithRole = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    getDetails: function (): string {
        return `Name: ${this.name}, Age: ${this.age}, Admin: ${this.isAdmin}`;
    },
    role: "Administrator",
    permissions: ["read", "write", "execute"]
};

console.log(user1.getDetails());

// Interface with Array Type
interface Friends {
    [index: number]: string; // index signature
}
const friendList: Friends = ['Arif', 'Tanzid', 'Samiul'];