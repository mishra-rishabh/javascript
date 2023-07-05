# TYPE CONVERSION IN JS
Type conversion in JavaScript is the process of converting a value from one type to another. JavaScript is a loosely typed language, which means that it doesn't require you to explicitly specify the type of a variable. However, there are times when you need to convert a value to a different type in order to perform a certain operation.

## Types of conversion
### <b>String Conversion</b>
* String conversion happens when we need the string form of a value.
* We can also call the `String(value)` function to convert a value to a string.
* String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

### <b>Numeric Conversion</b>
* Numeric conversion in mathematical functions and expressions happens automatically.
* For example, when division "/" is applied to non-numbers.
* We can use the `Number(value)` function to explicitly convert a value to a number.
* Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
* If the string is not a valid number, the result of such a conversion is `NaN`.

### Boolean Conversion
* Boolean conversion is the simplest one.
* It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to `Boolean(value)`.


## Conversion Rules
### Numeric
| Value | Becomes… |
|---|---|
| undefined | NaN |
| null | 0 |
| true and false | 1 and 0 |
| string | Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN. |

### Boolean
| Value | Becomes… |
|---|---|
| 0, null, undefined, NaN, "" | false |
| any other value | true |

### String
* Occurs when we output something.
* Can be performed with `String(value)`.
* The conversion to string is usually obvious for primitive values.
