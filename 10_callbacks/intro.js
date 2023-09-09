/* synchronous code runs one by one, i.e., every line will execute one after one */
let firstName = "Rishabh";
let lastName = "Mishra";

console.log("My name is " + firstName + " " + lastName);

/*  in asynchronous code it is not necessary that execution will be one by one */
/*  Here what will happen is "Start" and "End" will get printed first then timeout function will print it's message
    because it will run after 2 seconds, i.e., it is scheduled
*/
console.log("Start");

setTimeout(function() {
    console.log("Hi I am Rishabh");
}, 2000);

console.log("End");