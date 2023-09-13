/* iife: immediately invoked function expressions.
   iife are functions that are executed when they are initialized.
   it is a function that runs the moment it is invoked.
*/
const greet = "Vande Mataram";

/* anonymous iife: no function name */
(function () {
    console.log(greet);
})();

(function myGreeting() {
    console.log(greet);
})();

/* we can also use arrow functions */
(() => {
    console.log(greet);
})();

