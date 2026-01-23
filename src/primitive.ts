// Primitive Types in TypeScript

// JS -> string, number, boolean, null, undefined
// TS -> never, any, void, unknown, tuple, enum

// Implicit Type Declaration
// string Type
const userName: string = "ashiqur0";
// userName = 123; // Error: Type 'number' is not assignable to type 'string'
console.log(userName);

// Explicit Type Declaration: Here, typescript infers the type based on the assigned value
// number Type
const userId = 123;

// Boolean Type
let isLoggedIn: boolean;
isLoggedIn = true;

// any Type
let x = undefined; //* type of x is any: any value can be assigned
x = "Now I'm a string"; 
x = 10;
console.log(x);

// Void Type
function greetUser(name: string): void {
  console.log(`Hello, ${name}!`);
}
greetUser("ashiqur0");

// unknown Type
let userInput: unknown;
userInput = 5;
userInput = "A string value";

// Type assertion to convert unknown to string
if (typeof userInput === "string") {
  let userNameLength: number = (userInput as string).length;
  console.log(`Length of user input string: ${userNameLength}`);
}

// Tuple Type
let userTuple: [number, string, boolean];
userTuple = [1, "ashiqur0", true];
console.log(userTuple);

// Enum Type
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up;
console.log(move); // Output: 0

// Union Type
let userEmail: string | null = null;
userEmail = "ashiqur@example.com";