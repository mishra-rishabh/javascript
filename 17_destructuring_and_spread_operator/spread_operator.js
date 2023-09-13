let arr1 = [1, 2, 3, 4, 5, 6];
let obj1 = {...arr1};   // this will convert an array into key value pair, i.e., object
console.log(obj1);

function sum(num1, num2, num3) {
    return (num1 + num2 + num3);
}

let addition = sum(...arr1);    // will add 3 elements of the array
console.log(addition);

let obj2 = {
    myName: "Rishabh",
    age: 27,
    profession: "blockchain developer"
};

// this will copy the same keys and values of obj2 to obj3 but myName will be changed
let obj3 = {
    ...obj2,
    myName: "Rishabh Mishra"
};

// it is mandatory to spread the object first then do something if you want to overwrite the values
// here in obj4 ...obj2 is written at last, so it will print obj2 as it is and won't overwrite anything unlike obj3
let obj4 = {
    myName: "Rishabh Mishra",
    ...obj2
};

console.log(obj3);
console.log(obj4);