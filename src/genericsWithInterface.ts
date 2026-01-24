// Generic with Interface

interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
}

interface NormalWatch {
    heartRate: number, 
    stopWatch: boolean
}

const developer1: Developer<NormalWatch> = {
    name: 'Tanzid Mondol',
    salary: 50000,
    device: {
        brand: 'Hp',
        model: 'Pavilion',
        releaseYear: 2020,
    },
    smartWatch: { heartRate: 72, stopWatch: true },
}

interface AppleWatch extends NormalWatch {
    call: boolean,
    calculator: boolean
}

interface AdvancedWatch extends AppleWatch {
    ai: boolean
}

const developer2: Developer<AdvancedWatch> = {
    name: 'Samiul Islam',
    salary: 150000,
    device: {
        brand: 'Apple',
        model: 'MacBook Pro',
        releaseYear: 2026,
    },
    smartWatch: { heartRate: 72, stopWatch: true, call: true, calculator: true, ai: true },
}