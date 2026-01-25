//* Enum: define and keep a set of fixed string literal together

enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    VIEWER = "viewer"
}

const canEdit = (role: UserRole): boolean => {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}

const user1Role: UserRole = UserRole.ADMIN;
const user2Role: UserRole = UserRole.VIEWER;

console.log(`User 1 can edit: ${canEdit(user1Role)}`); // true
console.log(`User 2 can edit: ${canEdit(user2Role)}`); // false