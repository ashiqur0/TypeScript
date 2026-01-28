type User = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (array: User[]) => {
    return array.filter(arr => arr.isActive && arr);
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
console.log(filterActiveUsers(users));