let numbers = [1, 2, 3, 4, 5];

console.log("-------classical fo loop-------");
/* classical for loop */
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("-------for...of loop-------");
/* for...of loop */
for(let i of numbers) {
    console.log(i);
}

console.log("-------for...in loop-------");
for(let i in numbers) {
    console.log(numbers[i]);
}

console.log("-------forEach loop-------");
/* forEach loop */
numbers.forEach((element) => {
    console.log(element * 2);
});

/* Array.from */
let myName = "Rishabh";
let nameArr = Array.from(myName);
console.log(nameArr);