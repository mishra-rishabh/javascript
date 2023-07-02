let a = 1;
// let a = 5;  // this will give an error because "a" is already declared

// both will work because var tolerates redeclaration
var b = 5;
var b = "other value";

const RED = "RED";
// RED = "DARK RED";   // this will throw an error

console.log("x: ", x);  // initialized with undefined by the concept of hoisting
var x;

// let y;
console.log("y: ", y);  // it will throw an error because it is not declared. when declared its default value will be undefined.

// this will give an error, as const are required to be initialized at the time of declaration.
/* const COLOR;
COLOR = "YELLOW"; */