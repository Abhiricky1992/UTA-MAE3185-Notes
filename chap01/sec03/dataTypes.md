# Data Types
Data types in c refer to an extensive system used for declaring variables or functions of different types. The type of a variable determines how much space it occupies in storage and how the bit pattern stored is interpreted.

The types in C can be classified as follows,
- **Basic Types** are arithmetic types and are further classified into: (a) integer types and (b) floating-point types.
- **Enumerated types** are again arithmetic types and they are used to define variables that can only assign certain discrete integer values throughout the program.
- **The type void** indicates that no value is available.
- **Derived types** include (a) Pointer types, (b) Array types, (c) Structure types, (d) Union types and (e) Function types.
The array types and structure types are referred collectively as the aggregate types. The type of a function specifies the type of the function's return value. We will see the basic types in the following subsections, where as some of the other types will be covered in the upcoming chapters.

## Integer Types
The following table provides the details of standard integer types with their storage sizes and value ranges

**Integer Data Types in C Language**
|    **Type**      | **Storage size** |                    **Value range**                   |
|:----------------:|:----------------:|:----------------------------------------------------:|
|      `char`      |      1 byte      |                -128 to 127 or 0 to 255               |
|  `unsigned char` |      1 byte      |                       0 to 255                       |
|   `signed char`  |      1 byte      |                      -128 to 127                     |
|       `int`      |   2 or 4 bytes   | -32,768 to 32,767 or -2,147,483,648 to 2,147,483,647 |
|  `unsigned int`  |   2 or 4 bytes   |           0 to 65,535 or 0 to 4,294,967,295          |
|      `short`     |      2 bytes     |                   -32,768 to 32,767                  |
| `unsigned short` |      2 bytes     |                      0 to 65,535                     |
|      `long`      |      8 bytes     |      -9223372036854775808 to 9223372036854775807     |
|  `unsigned long` |      8 bytes     |               0 to 18446744073709551615              |

```{warning}
The storage size of some of the basic types can be different based on the machine.
```

## Floating-Point Types
The following table provide the details of standard floating-point types with storage sizes and value ranges and their precision


**Floating-Point Data Types in C Language**
|   **Type**    | **Storage size** |     **Value range**    |   **Precision**   |
|:-------------:|:----------------:|:----------------------:|:-----------------:|
|    `float`    |      4 byte      |   1.2E-38 to 3.4E+38   |  6 decimal places |
|    `double`   |      8 byte      |  2.3E-308 to 1.7E+308  | 15 decimal places |
| `long double` |      10 byte     | 3.4E-4932 to 1.1E+4932 | 19 decimal places |


# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
