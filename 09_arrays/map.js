let arr = [5, 6, 7, 8, 9, 10];

/* map: returns a new array by performing some operation */
let resultantArr = arr.map((value) => {
    console.log(value); // will print value
    return value + 1;   // will add 1 to each arr value
});

console.log("resultantArr: ", resultantArr);

/* map with 2 arguments */
let resultantArr_2 = arr.map((value, index) => {
    console.log(value, index);  // will print value and index
    return value + index;   // will add index value to the corresponding array value
});

console.log("resultantArr_2: ", resultantArr_2);

/* map with 3 arguments */
let resultantArr_3 = arr.map((value, index, array) => {
    console.log(value, index, array);   // will print value, index and array itself
    return value + index;   // will add index value to the corresponding array value
});

console.log("resultantArr_3: ", resultantArr_3);