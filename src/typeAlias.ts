// Type Alias

// Type Alias for a complex user object
type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female',
    contact: {
        phone: string,
        email: string
    },
    address: {
        division: string,
        city: string,
        postalCode: number
    }
}

const user1: User = {
    id: 1009,
    name: {
        firstName: 'Ashiqur',
        lastName: 'Rahman'
    },
    gender: 'male',
    contact: {
        phone: '01643496398',
        email: 'ashiqurrahmans2018@gmail.com'
    },
    address: {
        division: 'Dhaka',
        city: 'Dhaka',
        postalCode: 1207
    }
}

const user2: User = {
    id: 1010,
    name: {
        firstName: 'Jenina',
        lastName: 'Rahman'
    },
    gender: 'female',
    contact: {
        phone: '01700000000',
        email: 'jenina.rahman@example.com'
    },
    address: {
        division: 'Chittagong',
        city: 'Chittagong',
        postalCode: 4000
    }
}

console.log(user1);
console.log(user2);