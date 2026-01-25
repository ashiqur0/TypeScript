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

// as const instead of enum: keyof typeof
const UserRole2 = {
    Admin: "admin",
    Editor: "editor",
    Viewer: "viewer"
} as const;

const canEdit2 = (role: typeof UserRole2[keyof typeof UserRole2]): boolean => {
    return role === UserRole2.Admin || role === UserRole2.Editor;
}
const user1Role2: keyof typeof UserRole2 = "Admin";
const user2Role2: keyof typeof UserRole2 = "Viewer";
console.log(`User 1 can edit: ${canEdit2(UserRole2[user1Role2])}`); // true
console.log(`User 2 can edit: ${canEdit2(UserRole2[user2Role2])}`); // false