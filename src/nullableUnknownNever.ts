// Nullable, Unknown, and Never Types in TypeScript

// Nullable Types
const getUser = (user: string | null): void => {
    if (user) {
        console.log(`From Database: ${user}`);
    } else {
        console.log(`From Database: All Users`);
    }
}

getUser("Alice"); // Valid call
getUser(null); // Valid call
