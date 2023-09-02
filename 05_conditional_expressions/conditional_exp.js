/* if...else if...else */
let num = -34;

if(num < 0) {
    console.log("Negative number");
} else if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Number is zero");
}

/* Switch case */
const grade = "C";

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Work hard");
        break;
    default:
        console.log("Fail");
}

/* Ternary operator */
let age = 19;
(age >= 18) ? console.log("Adult") : console.log("Juvenile");