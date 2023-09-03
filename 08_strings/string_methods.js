let myName = "Rishabh";
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.slice(3, 6));    // gives substring from the start index to the (end index - 1)
console.log(myName.slice(2));   // from start index to the end of the string itself

console.log(myName.replace("bh", "v"));     // will replace "bh" with "v
console.log(myName.includes("Ris"));    // true
console.log(myName.includes("ris"));    // false
console.log(myName.startsWith("R"));
console.log(myName.endsWith("H"));

let someString = "   random string      ";
console.log(someString);
console.log(someString.trim());     // removes white leading and trailing white spaces

let myLastName = "Mishra";
let myFullName = myName.concat(" ", myLastName);
console.log(myFullName);

/* access characters using loop */
for(let char of myFullName) {
    console.log(char);
}