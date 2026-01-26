// Mapped Type

type Area<T> = {
    [key in keyof T]: T[key];
}

const area1: Area<{height: string, width: number}> = {
    height: "100px",
    width: 50
}

console.log(area1);