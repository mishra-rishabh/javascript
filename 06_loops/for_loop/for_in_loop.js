/* for-in loop */
let obj = {
    name: "Rishabh Mishra",
    nationality: "Indian",
    age: 27
};

for(let key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`);
}