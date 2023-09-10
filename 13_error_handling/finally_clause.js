/* finally is used with try...catch, and it will always get executed no matter what.
   we use finally for cleanups like close the file, exit the loop, write to the log file.
*/
try {
    console.log(num);   // undefined variable
    console.log("program executed successfully");
} catch (error) {
    console.log("Error occurred!!");
}
finally {
    console.log("I will get executed always!!");
}