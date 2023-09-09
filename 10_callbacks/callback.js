/* callback function */
function greet(name, callback) {
    console.log("Hi" + " " + name);
    callback();
}

function myCallBack() {
    console.log("This is a callback function");
}

greet("Rishabh", myCallBack);


/* callback using setTimeout */
function greetMe(name, callback) {
    console.log("Hello Mr. " + name);
    callback(name);     // executed only after greetMe is executed
}

function myCallBackFunction(name) {
    console.log("I am a callback created by " + name);
}

setTimeout(greetMe, 2000, "Rishabh", myCallBackFunction);