function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];

    const exists = (value: T): boolean => {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));