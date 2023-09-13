/* closure allows inner functions to access the outer scope of a function. */
message = "Vande Mataram";

function greet() {
    let message = "Hello";  // local variable created by greet()
    console.log("greet: ", message);

    {
        let message = "I am inside a block";
        console.log("block: ", message);
    }

    // display() is the inner function, a closure
    function display() {
        console.log("display: ", message);
    }

    /*
        now the value of message that will be printed is the below one,
        because when closure is returned then both the function and its lexical environment's references
        are returned with it.
        NOTE: lexical environment's references are returned instead of value.
        And that's why the message will be the below one
    */
    message = "Some other message";

    return display;
}

let func = greet();
func();