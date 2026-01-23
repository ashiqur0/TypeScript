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

// Unknown Type
const discountCalculator = (input: unknown): void => {
    if (typeof input === "number") {
        const discount = input * 0.1;
        console.log(`Discount: $${discount}`);
    } else if (typeof input === "string") {
        const discount = Number(input.split(' ')[0]) * 0.1;
        console.log(`Discount: $${discount}`);
    } else {
        console.log("Invalid input type for discount calculation.");
    }
}

discountCalculator(200);
discountCalculator("150 Tk");
discountCalculator(null); // Invalid input type

// Never Type: never return anything
const throwError = (message: string): never => {
    throw new Error(message);
}

type CustomError = {
    message: string;
}

try {
    throwError("This is a critical error!");
} catch (error) {
    console.error((error as CustomError).message); // type assertion (as)
}