// Union and Intersection Types in TypeScript

// Union Type Example: literal type, union type
type UserRole = 'admin' | 'moderator' | 'user';

function getUserPermissions(role: UserRole): string {
    switch (role) {
        case 'admin':
            return 'Full access granted.';
        case 'moderator':
            return 'Limited access granted.';
        case 'user':
            return 'Basic access granted.';
        default:
            return 'No access granted.';
    }
}

console.log(getUserPermissions('admin'));      // Full access granted.
console.log(getUserPermissions('moderator'));  // Limited access granted.
console.log(getUserPermissions('user'));       // Basic access granted.
console.log(getUserPermissions('guest' as UserRole)); // No access granted.

// Intersection Type Example: combining multiple types
type Employee = {
    id: number;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type ManagementEmployee = Employee & Manager;

const manager: ManagementEmployee = {
    id: 1,
    name: 'Alice Johnson',
    phoneNo: '123-456-7890',
    designation: 'Project Manager',
    teamSize: 10
};

console.log(manager);