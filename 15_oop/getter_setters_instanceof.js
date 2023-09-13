class Animal {
    constructor(givenName) {
        this.name = givenName;
    }

    run() {
        console.log(`Animal ${this.name} is running`);
    }

    get getAnimalName() {
        return this.name;
    }

    set setAnimalName(newName) {
        this.name = newName;
    }
}

class Lion extends Animal {
    roar() {
        console.log("Lion is roaring");
    }
}

let animalObj = new Animal("Tobi");
let lionObj = new Lion();

animalObj.run();
console.log(animalObj.getAnimalName);  // getter
animalObj.setAnimalName = "Lee";   // setter
console.log(animalObj.getAnimalName);

/* instanceof will return true if an object belongs to that class.
   child class object will also return true for parent class.
*/
lionObj.roar();

console.log(lionObj instanceof Lion);
console.log(lionObj instanceof Animal);     // child class object also belongs to the parent class
console.log(animalObj instanceof Animal);
console.log(animalObj instanceof Lion);     // parent class object doesn't belong to the child class

