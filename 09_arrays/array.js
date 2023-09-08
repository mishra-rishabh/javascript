let numberArray = [1, 2, 3, 4, 5, 6];
console.log("numberArray: ", numberArray);

let stringArray = ["ab", "cd", "ef", "gh"];
console.log("stringArray: ", stringArray);

let miscArray = ["hello", 12, null, true, {name: "Rishabh"}];
console.log("miscArray: ", miscArray);

/* Accessing index */
console.log("numberArray[0]: ", numberArray[0]);
console.log("numberArray[1]: ", numberArray[1]);
console.log("numberArray[2]: ", numberArray[2]);
console.log("numberArray[7]: ", numberArray[7]);    // undefined. Because there is no such index

/* Adding a new element to an existing array */
numberArray[6] = 7;
console.log("numberArray after adding an element: ", numberArray);

/* chnage existing element from an array */
numberArray[0] = 9;
console.log("numberArray after changing an element: ", numberArray);

/* NOTE: In JS, arrays are treated as objects */
console.log("type of numberArray: ", typeof numberArray);

/* looping an array */
for(let i = 0 ; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}




