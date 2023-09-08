let arr = [1, 2, 3, 4, 5];

/* reduce will reduce an array to a single value */
let result = arr.reduce((a, b) => {
    return a + b;
});

console.log("result: ", result);

/* 
    the above function will take a = 1 and b = 2 add it and return 3
    now in another call a = 3 (resultant) and b = 3 add it and return 6
    then a = 6, b = 4 and so on...
*/