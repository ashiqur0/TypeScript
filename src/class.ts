// OOP: class --> object

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(): string {
        return `${this.name} the ${this.species} says ${this.sound}`;
    }
}

const dog = new Animal("Bahadur", "Dog", "Woof");
console.log(dog.makeSound()); // Output: Bahadur the Dog says Woof

const cat = new Animal("Sondesh", "Cat", "Meow");
console.log(cat.makeSound()); // Output: Sondesh the Cat says Meow