# DATATYPES IN JS

### What is a datatype ?
* A datatype in JS is a type of data that can be stored in a variable.
* A value in JS is always of a certain type. For example, a string or a number.

### Types of dataypes in JS
There are 8 basic data types in JavaScript. <br/>
1. <b>Seven Primitive</b>
    * <b>String:</b> A sequence of characters. In JS, there are 3 types of quotes.
        * <b>Double quotes:</b> "Hello".
        * <b>Single quotes:</b> 'Hello'.
        * <b>Backticks:</b> \`Hello\`. <br/>
        Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript. <br/>
        Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.
    * <b>Number:</b> A numerical value. The number type represents both integer and floating point numbers.
    * <b>BigInt:</b> A large integer value. A BigInt value is created by appending "n" to the end of an integer.
    * <b>Boolean:</b> A value that can be either true or false.
    * <b>Undefined:</b> A value that has not been assigned yet. If a variable is declared, but not assigned, then its value is undefined.
    * <b>Null:</b> A value that represents nothingness.
    * <b>Symbol:</b> A unique identifier.
2. <b>One Non-Primitive</b>
    * <b>Object:</b> A collection of properties and methods and a complex data structure.

### The typeof operator
* The typeof operator returns the type of the operand.
* It’s useful when we want to process values of different types differently or just want to do a quick check.
* A call to typeof x returns a string with the type name.
* examples:
    * typeof undefined // "undefined"
    * typeof 0 // "number"
    * typeof 10n // "bigint"
    * typeof true // "boolean"
    * typeof "foo" // "string"



