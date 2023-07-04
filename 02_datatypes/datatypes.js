/*
    We can put any type in a variable.
    For example, a variable can at one moment be a string and then store a number
*/

// no error
let anyVar = "something";   // it is string
console.log("anyVar: ", anyVar);
console.log("type of anyVar: ", typeof anyVar);

anyVar = 123;   // previously it was a string and it is number now
console.log("anyVar: ", anyVar);
console.log("type of anyVar: ", typeof anyVar);

// 1. String
let stringVar1 = "I am a string variable";
let stringVar2 = 'I am a string variable';
let stringVar3 = `I am a string variable: ${"this is an expression inside curly braces"}`;
console.log("stringVar3: ", stringVar3);
console.log("type of stringVar1: ", typeof stringVar1);


// 2. Number
let numberVar1 = 987;
let numberVar2 = 123.9876;
console.log("type of numberVar2: ", typeof numberVar2);

// 3. BigInt
// the "n" at the end means it's a BigInt
const bigIntVar1 = 1234567890123456789012345678901234567890n;
console.log("type of bigIntVar: ", typeof bigIntVar1);

const bigIntVar2 = BigInt("9876");
console.log("bigIntVar2: ", bigIntVar2);

// 4. Boolean (logical type)
let boolVar1 = true;
let boolVar2 = false;
console.log("type of boolVar2: ", typeof boolVar2);

// 5. Undefined
let undefinedVar;
console.log("undefinedVar: ", undefinedVar);
console.log("type of undefinedVar: ", typeof undefinedVar);

// 6. Null
let nullVar = null;
console.log("nullVar: ", nullVar);
console.log("type of nullVar: ", typeof nullVar);   // object. You can consider it a bug in JavaScript that typeof null is an object.

// 7. Symbol
let symbolVar = Symbol("I am a symbol");
console.log("type of symbolVar: ", typeof symbolVar);

// 8. Object
const objectVar = {
    name: "Rishabh Mishra",
    nationality: "Indian",
    age: 27
};
console.log("objectVar: ", objectVar);
console.log("type of objectVar: ", typeof objectVar);
console.log("objectVar value for a specific key 1st way: ", objectVar["name"]);
console.log("objectVar value for a specific key 2nd way: ", objectVar.nationality);







