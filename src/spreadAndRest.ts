// Spread Operator
const friends = ['Arif', 'Tanzid', 'Samiul'];
const schoolFriends = ['Hasan', 'Khalid', 'Jakirul'];
const collegeFriends = ['Sumon', 'Salibul'];

friends.push(...schoolFriends, ...collegeFriends);
console.log('All Friends:', friends);

const developer = { name: 'Ashiqur', phone: '01643496398' };
const otherInfo = { hobby: 'Coding', profession: 'Web Developer', location: 'Bangladesh' };

const developerInfo = { ...developer, ...otherInfo };
console.log('Developer Info:', developerInfo);

// Rest Operator
const inviteFriends = (...friends: string[]): void => {
    friends.forEach(friend => console.log('Inviting: ', friend));
}

inviteFriends('Arif', 'Tanzid', 'Samiul', 'Hasan', 'Khalid');