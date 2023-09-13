greet();    // function is hoisted

function greet() {
    console.log("Vande Mataram");
}

sayHello();     // this will give error, because functions with let can't be hoisted

let sayHello = () => {
    console.log("Hello!");
}

// sayHello();

/* NOTE: always declare the variables or functions at the top so that no error comes. */