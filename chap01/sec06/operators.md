# Operators
An operator is a symbol that tells the compiler to perform specific mathematical or logical functions. C language is rich in built-in operators and provides the following types of operators
- Arithmetic Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Assignment Operators

## Arithmetic Operators
The following table shows all the arithmetic operators supported by the C language. Assume variable A holds 10 and variable B holds 20 then,

**Arithmetic Operators**
| **Operator**   |                        **Description**                       | **Expression**   | **Result** |
|:--------------:|:-------------------------------------------------------------|:----------------:|:----------:|
|       `+`      |                      Adds two operands.                      |      `A + B`     |     30     |
|       `-`      |           Subtracts second operand from the first.           |      `A - B`     |     -10    |
|       `*`      |                   Multiplies both operands.                  |      `A * B`     |     200    |
|       `/`      | Divides numerator by de-numerator.                           |      `B / A`     |      2     |
|       `%`      | Modulus Operator and remainder of after an integer division. |      `B % A`     |      0     |
|      `++`      | Increment operator increases the integer value by one.       |       `A++`      |     11     |
|      `--`      | Decrement operator decreases the integer value by one.       |       `A--`      |      9     |


Following code shows the usage of all the arithmetic operators,
```c++
#include <stdio.h>

int main() {

    int A = 10;
    int B = 20;

    printf("A + B = %d\n", A + B );
    printf("A - B = %d\n", A - B );
    printf("A * B = %d\n", A * B );
    printf("A / B = %d\n", A / B );
    printf("A % B = %d\n", A % B );
    printf("++A = %d\n", ++A );
    printf("--A = %d\n", --A );

    return 0;
}
```

## Relational Operators
The following table shows all the relational operators supported by C. Assume variable A holds 10 and variable B holds 20 then,

**Relational Operators**
| **Operator** |                             **Description**                            | **Example** | **Result** |
|:------------:|:-----------------------------------------------------------------------|:-----------:|:----------:|
|     `==`     |                    Checks if both operands are equal.                  |   `A == B`  |   `false`  |
|     `!=`     |                  Checks if both operands are not equal.                |   `A != B`  |   `true`   |
|      `>`     |       Checks if first operand is greater than the second operand.      |   `A > B`   |   `false`  |
|      `<`     | Checks if first operand is less than the second operand.               |   `A < B`   |   `true`   |
|     `>=`     | Checks if first operand is greater than or equal to the second operand.|   `A >= B`  |   `false`  |
|     `<=`     | Checks if first operand is less than or equal to the second operand.   |   `A <= B`  |   `true`   |


Following code shows the usage of all the relational operators,
```c++
#include <stdio.h>
  
int main()
{
    int A = 10, B = 20;
    
    printf("A == B is %d", A == B);
    printf("A > B is %d", A > B);
    printf("A >= B is %d", A >= B);
    printf("A < B is %d", A < B);
    printf("A <= B is %d", A <= B);
    printf("A != B is %d", A != B);
  
    return 0;
}
```

## Logical Operators
Following table shows all the logical operators supported by C language. Assume variable A holds 1 and variable B holds 0, then


**Logical Operators**
| **Operator (Name)** |                       **Description**                       | **Example** | **Result** |
|:-------------------:|:------------------------------------------------------------|:-----------:|:----------:|
|      `&&` (AND)     | Returns true only if all the operands are true or non-zero. |   `A && B`  |   `false`  |
|     `\|\|` (OR)     | Returns true if either of the operands is true or non-zero. |  `A \|\| B` |   `true`   |
|      `!` (NOT)      |        Returns true if the operand is false or zero.        | `!(A && B)` |   `false`  |


Following code shows the usage of the logical operators,
```c++
#include <stdio.h>
  
int main()
{
    bool A = true, B = false;
    
    printf("A && B is %d", A && B);
    printf("A || B is %d", A || B);
    printf("!(A && B) is %d", !(A && B));
  
    return 0;
}
```

## Bitwise Operators
Bitwise operator works on bits and perform bit-by-bit operation. Since all the information stored in a computer is in binary form, the variable A holding 60 and variable B holding 13 are stored in binary format in the computer's memory. The binary representation of these numbers is as follows,
```c++
    A = 60 = 0b00111100
    B = 13 = 0b00001101
```
The following table lists the bitwise operators supported by C. Assuming variable A and variable B hold values discussed above then

**Bitwise Operators**
| **Operator (Name)** |                                             **Description**                                           | **Example** |     **Result**     |
|:-------------------:|:------------------------------------------------------------------------------------------------------|:-----------:|:------------------:|
|      `&` (AND)      | Similar to logical AND on every bit of the two operands.                                              |   `A & B`   |  `12 = 0b00001100` |
|      `\|` (OR)      | Similar to logical OR on every bit of the two operands.                                               |   `A \| B`  |  `61 = 0b00111101` |
|      `^` (XOR)      | Operates on every bit of the two operands. The result of XOR is 1 if the two bits are different.      |   `A ^ B`   |   `49 = 00110001`  |
|      `~` (NOT)      | Inverts all bits of the operand.                                                                      |     `~A`    | `-61 = 0b11000011` |
|  `<<` (Left Shift)  | Left shifts the bits of the first operand, the second operand decides the number of places to shift.  |   `A << 2`  | `240 = 0b11110000` |
|  `>>` (Right Shift) | Right shifts the bits of the first operand, the second operand decides the number of places to shift. |   `A >> 2`  |  `15 = 0b00001111` |


Following code shows the usage of the bitwise operators,
```c++
#include <stdio.h>
  
int main()
{
    int A = 60; // 0b00111100
    int B = 13; // 0b00001101
    
    printf("A & B is %d", A & B);
    printf("A | B is %d", A | B);
    printf("A ^ B is %d", A ^ B);
    printf("~A is %d", ~A);
    printf("A << 2 is %d", A << 2);
    printf("A >> 2 is %d", A >> 2);
  
    return 0;
}
```

## Assignment Operators
There is one basic assignment operator which assigns the value of the expression on the right hand side to the variable on the left hand side. Rest of the assignment operators are similar to the operators discussed previously but are designed for a very specific case, operate on the operand on the left hand side and save the result in the same operand. Assume variable A holds 2, variable B holds 3 and variable C holds 6, then

**Assignment Operators**
| **Operator** |                                                     **Description**                                                     | **Example** |    **Result**   |
|:------------:|:-----------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------------:|
|       `=`      | Assigns values from right side operands to left side operand.                                                           |  `C = A + B`  |  `C = 2 + 3 = 5`  |
|      `+=`      | Adds the right operand to the left operand and assign the result to the left operand.                                   |    `C += A`   |  `C = C + A = 8`  |
|      `-=`      | Subtracts the right operand from the left operand and assigns the result to the left operand.                           |    `C -= A`   |  `C = C - A = 4`  |
|      `*=`      | Multiplies the right operand with the left operand and assigns the result to the left operand.                          |    `C *= A`   |  `C = C * A = 12` |
|      `/=`      | Divides the left operand with the right operand and assigns the result to the left operand.                             |    `C /= A`   |  `C = C / A = 3`  |
|      `%=`      | Takes modulus using two operands and assigns the result to the left operand.                                            |    `C %= A`   |  `C = C % A = 0`  |
|      `<<=`     | Left shift the left operand by the number of bits defined by right operand and assigns the result to the left operand.  |   `C <<= A`   | `C = C << A = 24` |
|      `>>=`     | Right shift the left operand by the number of bits defined by right operand and assigns the result to the left operand. |   `C >>= A`   |  `C = C >> A = 1` |
|      `&=`      | Bitwise AND the two operands and assign the result to the left operand.                                                 |    `C &= B`   |  `C = C & B = 2`  |
|      `^=`      | Bitwise XOR the two operands and assign the result to the left operand.                                                 |    `C ^= B`   |  `C = C ^ B = 5`  |
|      `\|=`     | Bitwise OR the two operands and assign the result to the left operand.                                                  |   `C \|= B`   |  `C = C \| B = 7` |


Following code shows the usage of the assignment operators
```c++
#include <stdio.h>

int main()
{
    int a = 10;
    printf("Value of a is %d\n", a);
    a += 10;
    printf("Value of a is %d\n", a);
    a -= 10;
    printf("Value of a is %d\n", a);
    a *= 10;
    printf("Value of a is %d\n", a);
    a /= 10;
    printf("Value of a is %d\n", a);

    return 0;
}
```

## Operator Precedence
Operator precedence determines the grouping of terms in an expression and decides how an expression is evaluated. Certain operators have higher precedence than others; for example, the multiplication operator has a higher precedence than the addition operator.
For example, `x = 7 + 3 * 2;` here, `x` is assigned `13`, not `20` because operator `*` has a higher precedence than `+`, so the multiplication `3 * 2` happens first and then `7` is added into the result.
Following table shows the operator precedence order where, operators with the highest precedence appear at the top of the table, and those with the lowest appear at the bottom. Within an expression, higher precedence operators will be evaluated first.

**Operator Precedence Order**
|  **Category**  |            **Operator**           | **Associativity** |
|:--------------:|:---------------------------------:|:-----------------:|
|     Postfix    |  `()`, `[]`, `->`, `.` ,`++` ,`--`|   Left to right   |
|      Unary     |  `+` ,`-` ,`!` ,`~`, `++`, `--` , |
|                |     `(type)`, `*` ,`&`, `sizeof`  |   Right to left   |
| Multiplicative |               `*`, `/`, `%`       |   Left to right   |
|    Additive    |                `+` ,`-`           |   Left to right   |
|      Shift     |               `<<`, `>>`          |   Left to right   |
|   Relational   |             `<`, `<=`, `>`, `>=`  |   Left to right   |
|    Equality    |               `==`, `!=`          |   Left to right   |
|   Bitwise AND  |                 `&`               |   Left to right   |
|   Bitwise XOR  |                 `^`               |   Left to right   |
|   Bitwise OR   |                 `\|`              |   Left to right   |
|   Logical AND  |                 `&&`              |   Left to right   |
|   Logical OR   |                `\|\|`             |   Left to right   |
|   Conditional  |                 `?`, `:`          |   Right to left   |
|   Assignment   | `=`, `+=`, `-=`, `*=`, `/=`, `%=`,|                   |
|                | `>>=`, `<<=`, `&=`, `^=`, `\|=`   |   Right to left   |
|      Comma     |                 `,`               |   Left to right   |


# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
