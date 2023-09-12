/* parent class */
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running");
    }

    shout() {
        console.log(this.name + " is shouting");
    }
}

/* child class inheriting the properties of parent class */
class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana");
    }
}

let animal = new Animal("Bagheera", "black");
let ape = new Monkey("Hit Monkey", "Orange");

animal.shout();
ape.shout();
ape.eatBanana();
// animal.eatBanana();     // this will throw an error, because Animal class doesn't have such function