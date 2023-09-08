let arr = [12, 34, 56, 10, 18, 34, 1, 4, 8, 9];

/* filter will return a new array based on the given condition */
let resultantArr = arr.filter((val) => {
    return val > 20;
});

console.log("resultantArr: ", resultantArr);