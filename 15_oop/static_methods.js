class Animal {
    name;
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`Animal ${this.name} is walking`);
    }

    /* static methods can only be called by class name and not by its object, because they belong to a class */
    static animalColor(color) {
        console.log(`Animal is ${color} in color`);
    }
}

let animalObj = new Animal("Lion");
animalObj.walk();
// animalObj.animalColor();    // this will given an error
Animal.animalColor("Yellow");