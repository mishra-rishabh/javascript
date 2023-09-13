/* hoisting is the default behavior of moving all the declarations
   at the top of the scope before code execution.
   It means, no matter where you have declared the variables,
   JS interpreter will automatically move them to the top just before
   the execution.
*/
console.log(a);     // implementation at top
var a;      // it will print undefined but not an error. declaration at bottom. this will be hoisted

console.log(b);     // this will print undefined
var b = 6;      // declaration will move to top by hoisting but initialization won't work

console.log(c);     // this will throw an error
let c = 7;     // variables with let and const are not hoisted
