// Type Assertion

const kgToGram = (weight: number | string): number | string | undefined => {
    if (typeof weight === 'number') {
        return weight * 1000;
    } else if (typeof weight === 'string') {
        const [value] = weight.split(' '); // destructuring first index of splitted array
        return `Converted value: ${Number(value) * 1000}`;
    }
}

const result1 = kgToGram(10) as number;
console.log(result1); // 10000

const result2 = kgToGram("5 Kg") as string;
console.log(result2); // Converted value: 5000