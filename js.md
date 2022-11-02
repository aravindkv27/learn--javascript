# Learn JavaScript

## Variables

To declare variable we can use let, var keywords. If the value of the variable is fixed and won't change ever in the program we can use `const` keyword.    

__Syntax:__

```
let a =10;
var age =18;
const c =0;
```

##  Template Literal

It is possible to include expressions in a string by using backticks (`) to delimit the string. Such a string is

__Syntax:__

```
const country = "France";
console.log(`I live in ${country}`);
```

## Explicit Conversion

To convert the value of another type.  JavaScript has the `Number()` and `String()` commands that convert the value between the parenthesis to a number or a string.

```
const a = '21';
const num_a = Number(a)
```

## User Interaction

Get the input from the user and display it.

__Syntax:__

```
var name = prompt("Enter the name: ");
alert(`Hello, ${name}`);
```