# Constants and Literals
Constants refer to fixed values that the program may not alter during its execution. These fixed values are also called *literals*.

Constants can be of any of the basic data types like an integer constant, a floating constant, a character constant, or a string literal.

Constants are treated just like regular variables except that their values cannot be modified after their definition.

## Integer Literals
An integer literal can be a binary, octal, hexadecimal or decimal constant. A prefix specifies the base or radix: `0b` or `0B` for binary, `0` for octal, `0x` or `0X` for hexadecimal, and nothing for decimal.

An integer literal can also have a suffix that is a combination of `U` and `L`, for `unsigned` and `long`, respectively. The suffix can be uppercase or lowercase and can be in any order.

Here are examples of integer literals representing same decimal number, 85,
```c++
85         /* decimal */
0125       /* octal */
0x55       /* hexadecimal */
85         /* int */
85u        /* unsigned int */
85l        /* long */
85ul       /* unsigned long */
```

## Floating-point Literals
A floating-point literal has an integer part, a decimal point, a fractional part, and an exponent part. You can represent floating point literals either in decimal form or exponential form.

While representing decimal form, you must include the decimal point, the exponent, or both; and while representing exponential form, you must include the integer part, the fractional part, or both. The signed exponent is introduced by `e` or `E`.

Here are some examples of floating-point literals,
```c++
3.14159       /* Legal */
314159E-5L    /* Legal */
510E          /* Illegal: incomplete exponent */
210f          /* Illegal: no decimal or exponent */
.e55          /* Illegal: missing integer or fraction */
```

## Character Literals
Character literals are enclosed in single quotes, e.g., `'x'` can be stored in a simple variable of `char` type.

A character literal can be a plain character (e.g., `'x'`), an escape sequence (e.g., `'\t'`), or a universal character (e.g., `'\u02C0'`). A list of basic character literals and their corresponding decimal values are provided at [https://www.asciitable.com/](https://www.asciitable.com/).

## String Literals
String literals or constants are enclosed in double quotes `""`. A string contains characters that are similar to character literals: plain characters, escape sequences, and universal characters.

You can break a long line into multiple lines using string literals and separating them using white spaces.

Here are some examples of string literals. All the three forms are identical strings.
```c++
"hello, dear"

"hello, \
dear"

"hello, " "d" "ear"
```

## Defining Constants
There are two simple ways in C to define constants
- Using `#define` preprocessor directive
- Using `const` keyword

Data defined by the `#define` macro definition are preprocessed, so that your entire code can use it. This can free up space and increase compilation times. However, `const` variables are considered variables, and not macro definitions.

The big advantage of `const` over `#define` is type checking. `#defines` can't be type checked, so this can cause problems when trying to determine the data type. If the variable is, instead, a constant then we can grab the type of the data that is stored in that constant variable.

Following code show the usage of both `#define` and `const`,
```c++
#include <stdio.h>

// macro definition
#define X 30

// global integer constant
const int Y = 10;

int main()
{
    // local ineteger constant
    const  int Z = 30;
    
    printf("Value of X: %d\n",X);
    printf("Value of Y: %d\n",Y);
    printf("Value of Z: %d\n",Z);

    return 0;
}
```
# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
