/* destructuring means unpacking values */
let someArray = [1, 2, 3, 4, 5, 6];

// traditional way
x = someArray[0];
y = someArray[1];

// destructuring array
let [a, b, ...restEle] = someArray;    // here ... represents rest operator and "rest" will contain the remaining elements as an array
console.log(a, b, restEle);

// here p = 1 and remain = [4, 5, 6] because we have skipped 2 elements of the array
let [p, , , ...remain] = someArray;
console.log(p, remain);

/* destructuring objects */
let someObj = {
    age: 27,
    myName: "Rishabh"
};

let {age, myName} = someObj;
console.log(age, myName);