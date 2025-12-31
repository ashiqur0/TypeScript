// to compile and run
// npx tsc hello.ts
// npx hello.js

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World2");
console.log(message);