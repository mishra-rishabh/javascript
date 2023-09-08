let numberArray = [1, 2, 3, 4, 5];
console.log("length property: ", numberArray.length);
console.log("numberArray type: ", typeof numberArray);

let convertedNumberArray = numberArray.toString();
console.log("toString() function: ", convertedNumberArray);
console.log("convertedNumberArray type: ", typeof convertedNumberArray);

let joinedArray = numberArray.join("_");    // Adds all the elements of an array into a string, separated by the specified separator string
console.log("join() function: ", joinedArray);
console.log("joinedArray type: ", typeof joinedArray);

numberArray.pop();  // removes the last element from an original array
console.log("pop() function: ", numberArray);   // last element i.e., 5 is removed

numberArray.push(7);
console.log("push() function: ", numberArray);

numberArray.shift();    // Removes the first element from an original array and returns it
console.log("shift() function: ", numberArray);

numberArray.unshift(6);
console.log("unshift() function: ", numberArray);

let evenNumbers = [2, 4, 6, 8, 10, 12];
console.log("evenNumbers length: ", evenNumbers.length);
delete evenNumbers[2];  // delete is an operator. it deletes the element from an array but doesn't affect the length
delete evenNumbers[5];
console.log("evenNumbers after using delete operator: ", evenNumbers);
console.log("evenNumbers length: ", evenNumbers.length);

let arr_1 = [1, 5, 6, 8];
let arr_2 = [9, 12, 66, 28];
let arr_3 = [19, 56, 67, 80];
let concatArray = arr_1.concat(arr_2, arr_3);
console.log("concat() function: ", concatArray);

let unsortedArray = [78, 9, 12, 1, 67, 3];
unsortedArray.sort();   // sorts an original array alphabetically i.e., dictionary pattern
console.log("sort() function: ", unsortedArray);

/* splice() and slice() functions */
let someArray = [45, 67, 89, 90, 12, 34, 56, 36, 59, 62, 47];
someArray.splice(3, 4, 1001, 1002, 1003, 1004);     // takes 3 arguments. start index, number of elements to delete, elements to add
console.log("splice() function: ", someArray);

let otherArray = [34, 45, 56, 67, 78, 61, 89];
let slicedArr_1 = otherArray.slice(3);    // returns a new array from the given start index
console.log("slice() function 1: ", slicedArr_1);

let slicedArr_2 = otherArray.slice(2, 5);    // returns a new array from the given start index to the (end index - 1)
console.log("slice() function 2: ", slicedArr_2);