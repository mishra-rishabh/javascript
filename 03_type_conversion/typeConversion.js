// String conversion
let boolVal = true; // a boolean value
console.log("type of boolVal: ", typeof boolVal);

boolVal = String(boolVal);  // it becomes string now
console.log("type of boolVal: ", typeof boolVal);

// Numeric Conversion
let strVal = "4" / "2"; // here conversion happens automatically, i.e., implicitly
console.log("strVal: ", strVal);    // will return 2
console.log("type of strVal: ", typeof strVal); // number

let otherStrVal = "5678";
console.log("type of otherStrVal: ", typeof otherStrVal); // string

otherStrVal = Number(otherStrVal);
console.log("type of otherStrVal: ", typeof otherStrVal); // it becomes number now

let invalidStrNumber = "123abcd";   // valid string but invalid string number
let convertedStrNumber = Number(invalidStrNumber);
console.log("convertedStrNumber: ", convertedStrNumber);    // will return NaN

// Boolean Conversion
let numValToBool1 = Boolean(1); // true
let numValToBool2 = Boolean(0); // false

let strValToBool1 = Boolean("some string"); // true
let strValToBool2 = Boolean("");    // false, because it is an empty string





