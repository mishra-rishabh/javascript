12;     // no error
"Hello";    // no error
// bhoot;  // error: bhoot is not defined

let a = 20;
let b = 4;

/* Arithmetic Operators */
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} ** ${b} = ${a ** b}`);    // exponentiation
console.log(`${a} % ${b} = ${a % b}`);    // modulo
console.log(`${a}++ = ${a++}`);    // post increment
console.log(`after post incrementing a = ${a}`);
console.log(`${a}-- = ${a--}`);    // post decrement
console.log(`after post decrementing a = ${a}`);
console.log(`++${a} = ${++a}`);    // pre increment
console.log(`after pre incrementing a = ${a}`);
console.log(`--${a} = ${--a}`);    // post decrement
console.log(`after pre decrementing a = ${a}`);

/* Assignment Operators */
let c = 5;
c = c + 5;

c += 5;     // same as c = c + 5
console.log("c = ", c);

c -= 5;
console.log("c = ", c);

c *= 2;
console.log("c = ", c);

c /= 2;
console.log("c = ", c);

c **= 2;
console.log("c = ", c);

/* Comparison Operators */
let x = 2;
let y = 2;
let z = 3;

let p = "2";

console.log("x == y: ", x == y);    // will compare only value
console.log("x == z: ", x == z);
console.log("x != z: ", x != z);
console.log("x < z: ", x < z);
console.log("x > z: ", x > z);
console.log("x <= y: ", x <= y);
console.log("x >= y: ", x >= y);
console.log("x === p: ", x === p);  // will compare value and data type
console.log("x !== p: ", x !== p);  // will compare value and data type

/* Logical Operators */
let q = 6;
let t = 7;

console.log("q < t && q == 6: ", q < t && q == 6);  // both conditions should be true
console.log("q > t || q == 6: ", q > t || q == 6);  // either of the conditions should be true
console.log("!true = ", !true);
console.log("!false = ", !false);