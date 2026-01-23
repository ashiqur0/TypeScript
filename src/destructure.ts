// Destructuring In TypeScript

// Object Destructuring
const student = {
    name: {
        firstName: 'Ashiqur',
        lastName: 'Rahman'
    },
    roll: 9,
    semester: '6th',
    batch: '24th',
    department: 'CSE',
    university: 'PUB'
};

// Destructuring the student object: nested object, name aliasing
const { name: { firstName, lastName }, roll: studentRoll, semester, batch, department, university } = student;

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Roll: ${studentRoll}`);
console.log(`Semester: ${semester}`);
console.log(`Batch: ${batch}`);
console.log(`Department: ${department}`);
console.log(`University: ${university}`);