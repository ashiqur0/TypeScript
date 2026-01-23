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

// Destructuring the student object: (1) nested object, (2) name aliasing, (3) direct properties
const { name: { firstName, lastName }, roll: studentRoll, semester, batch, department, university } = student;

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Roll: ${studentRoll}`);
console.log(`Semester: ${semester}`);
console.log(`Batch: ${batch}`);
console.log(`Department: ${department}`);
console.log(`University: ${university}`);

// Array Destructuring
const friends: string[] = ['Ornet', 'Osama', 'Arif', 'Rahat', 'Rubayat', 'Mehedul', 'Rashed'];

// Destructuring the friends array: (1) skipping elements and (2) using rest operator
const [eeeFriend, civilFriend, , seniorFriend, diplomaFriend, ...otherFriends] = friends;

console.log(`EEE Friend: ${eeeFriend}`);
console.log(`Civil Friend: ${civilFriend}`);
console.log(`Senior Friend: ${seniorFriend}`);
console.log(`Diploma Friend: ${diplomaFriend}`);
console.log(`Other Friends: ${otherFriends.join(', ')}`);