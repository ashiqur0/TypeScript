// Generic with Interface

interface Developer<T, X> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
}

interface NormalWatch {
    heartRate: number, 
    stopWatch: boolean
}

interface Bike {
    brand: string,
    model: string,
    engineCapacity: string
}

const developer1: Developer<NormalWatch, Bike> = {
    name: 'Tanzid Mondol',
    salary: 50000,
    device: {
        brand: 'Hp',
        model: 'Pavilion',
        releaseYear: 2020,
    },
    smartWatch: { heartRate: 72, stopWatch: true },
    bike: { brand: 'Yamaha', model: 'R15', engineCapacity: '150cc' }
}

interface AppleWatch extends NormalWatch {
    call: boolean,
    calculator: boolean
}

interface AdvancedWatch extends AppleWatch {
    ai: boolean
}

const developer2: Developer<AdvancedWatch, Bike> = {
    name: 'Samiul Islam',
    salary: 150000,
    device: {
        brand: 'Apple',
        model: 'MacBook Pro',
        releaseYear: 2026,
    },
    smartWatch: { heartRate: 72, stopWatch: true, call: true, calculator: true, ai: true },
    bike: { brand: 'Kawasaki', model: 'Ninja800', engineCapacity: '250cc' }
}