# VARIABLES IN JS

<b>What is a variable?</b>
* Variables are used to store the information.
* A variable is a “named storage” for data.
* A variable in JavaScript is a named container for storing data.
* It can be used to store any type of data, such as numbers, strings, objects, or functions.
* Variables are declared using the var, let, or const keywords.

<b>var:</b> It is the oldest keyword for declaring variables, and it is still supported in modern JavaScript.However, it has some limitations, such as its scope. <br/>
<b>let:</b> It is a newer keyword that was introduced in ES6. It has a few advantages over var, such as block scope and preventing accidental re-assignment. <br/>
<b>const:</b> It is a keyword that was also introduced in ES6. It is used to declare constants, which are variables that cannot be changed after they are initialized. <br/>


<b>Naming Convention</b> <br/>
There are three limitations on variable names in JavaScript:
1. The name must contain only letters, digits, or the symbols $ and _.
2. The first character must not be a digit.
3. It should not contain any reserved keyword.

* The most common convention is to use camelCase. This means that the first word of the variable name is lowercase, and subsequent words start with a capital letter. For example, the variable "myName" would be written in camelCase.
* Another common convention is to use snake_case. This means that all words in the variable name are lowercase, and they are separated by underscores. For example, the variable "my_name" would be written in snake_case.

Here are some additional tips for naming variables in JavaScript:

* Use descriptive names that accurately reflect the purpose of the variable.
* Avoid using abbreviations or acronyms in variable names.
* Keep variable names short and to the point.
* Avoid using special characters in variable names, such as spaces, punctuation marks, or symbols.

<b>var vs let vs const in JavaScript</b>

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function or global | Block | Block |
| Re-assignment | Allowed | Allowed | Not allowed |
| Initialization | Not required | Not required | Required |
| Hoisting | Yes | No | No |

<b>Scope:</b> var variables have function or global scope, while let and const variables have block scope. This means that var variables are accessible from anywhere within their function or globally, while let and const variables are only accessible from within the block where they are declared. <br/>
<b>Re-assignment:</b> var variables can be re-assigned any number of times, while let variables can only be re-assigned if they are not declared within a loop. const variables cannot be re-assigned at all. <br/>
<b>Initialization:</b> var variables do not need to be initialized with a value, while let and const variables must be initialized with a value. If a let or const variable is not initialized with a value, it will be assigned the value undefined. <br/>
<b>Hoisting:</b> var variables are hoisted, which means that they are accessible before they are declared. let and const variables are not hoisted, which means that they are not accessible before they are declared. <br/>