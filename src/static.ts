// static: A static member belongs to the class itself rather than to any specific instance of the class.

class Counter {
    static count: number = 0;

    increment() {
        return Counter.count = Counter.count + 1; // Accessing static member using class name
    }

    static decrement() {
        return Counter.count = Counter.count - 1;
    }
}

const instance1 = new Counter();
console.log(instance1.increment());
console.log(instance1.increment());
console.log(Counter.decrement());   // Accessing static method using class name

const instance2 = new Counter();
console.log(instance2.increment());
console.log(Counter.decrement());
console.log(Counter.decrement());