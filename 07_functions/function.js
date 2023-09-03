/* function with parameters */
function sumOfTwoNumbers(a, b) {
    return (a + b);
}

/* above function using arrow function */
const sumOfTwoNumbersDifferentSyntax = (a, b) => {
    return (a + b);
}

/* function without any parameter */
function printMessage() {
    console.log("Vande Mataram");
}

/* above function using arrow function */
const printMessageDifferentSyntax = () => {
    console.log("Vande Mataram");
}

let a = 5;
let b = 6;

console.log(`sum of ${a} and ${b} is: ${sumOfTwoNumbers(a, b)}`);
console.log(`sum of ${a} and ${b} is: ${sumOfTwoNumbersDifferentSyntax(a, b)}`);
printMessage();
printMessageDifferentSyntax();