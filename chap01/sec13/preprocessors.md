# Preprocessors

Preprocessors are programs that process the code before compilation. In simple terms, a C Preprocessor is just a text manipulation tool that instructs the compiler to do required pre-processing of the code before the actual compilation.

All preprocessor commands begin with a hash symbol, `#`. It must be the first non-blank character. A preprocessor directive should begin in the first column. Following table lists some of the commonly used preprocessor directives,
```{table}
| Directive  | Description                                                                      |
| :--------: | :------------------------------------------------------------------------------- |
| `#define`  | Used to define a macro                                                           |
|  `#undef`  | Used to undefine a macro                                                         |
| `#include` | Used to include a file in the source code program                                |
|  `#ifdef`  | Used to include a section of code if a certain macro is defined by `#define`     |
| `#ifndef`  | Used to include a section of code if a certain macro is not defined by `#define` |
|   `#if`    | Check for the specified condition                                                |
|  `#else`   | Alternate code that executes when `#if` fails                                    |
|  `#endif`  | Used to mark the end of `#if`, `#ifdef`, and `#ifndef`                           |
```
These preprocessors can be classified based on the type of function they perform.

## Types of C/C++ Preprocessors
There are 4 Main Types of Preprocessor Directives:
1. Macros
2. File Inclusion
3. Conditional Compilation
4. Other Directives

### Macros
Macros are pieces of code in a program that is given some name. Whenever this name is encountered by the compiler, the compiler replaces the name with the actual piece of code. The `#define` directive is used to define a macro. Following is the syntax for defining a macro,
```c++
#define token value
```
where after preprocessing, the `token` will be replaced by its `value` in the program. Following is a program that makes use of a macro,
```c++
#include <stdio.h>

#define LIMIT 5     // macro definition

int main()
{
	for (int i = 0; i < LIMIT; i++)
		printf("%d \n", i);

	return 0;
}
```
In the above program, when the compiler replaces the token `LIMIT` with its value `5`. The word `LIMIT` in the macro definition is called a macro template and `5` is macro expansion.
```{note}
There is no semicolon `;` at the end of the macro definition. Macro definitions do not need a semicolon to end.
```
There are also some [Predefined Macros](https://www.geeksforgeeks.org/predefined-macros-in-c-with-examples/) in C which are useful in providing various functionalities to a program.

Macros can also have arguments. This allows the use of macros as functions. Following code makes use of macros with parameters,
```c++
#include <stdio.h>

#define AREA(l, b) (l * b)      // macro with parameters

int main()
{
	int l1 = 10, l2 = 5, area;
	area = AREA(l1, l2);
	printf("Area of rectangle is: %d", area);

	return 0;
}
```
We can see from the above program that whenever the compiler finds `AREA(l, b)` in the program, it replaces it with the statement `(l * b)`. Not only this, but the values passed to the macro template `AREA(l, b)` will also be replaced in the statement. Thus, `AREA(10, 5)` will be equal to `(10 * 5)`.

### File Inclusion
This type of preprocessor directive tells the compiler to include a file in the source code. There are two types of files that are commonly included by the user in the program,

#### Standard Header Files
The standard header files contain definitions of functions like `printf()`, `scanf()`, etc. that exist in C language by default. These files must be included to work with these functions. Different functions are declared in different header files. For example, standard I/O functions are in the `stdio.h` file whereas functions that perform string operations are in the `string.h` file. Following is the syntax for including standard header files,
```c++
#include <fileName>
```
where, `fileName` is the name of the header file to be included. The `<` and `>` brackets tell the compiler to look for the file in the standard directory.

#### User-Defined Header Files
When a program becomes very large, it is a good practice to divide it into smaller files and include them whenever needed. These types of files are user-defined header files. These files can be included as,
```c++
#include "fileName"
```
The double quotes, `""` tell the compiler to search for the header file in the source file's directory.

### Conditional Compilation
These type of directives help compilation of a specific portion of the program based on some conditions. There are the following preprocessor directives that are used to insert conditional code:
1. `#if`
2. `#ifdef`
3. `#ifndef`
4. `#else`
5. `#elif`
6. `#endif`

`#endif` directive is used to close off the `#if`, `#ifdef`, and `#ifndef` opening directives which means the preprocessing of these directives is completed. Following is the syntax for `#ifdef` macro,
```c++
#ifdef macroToken
    statement1;
    statement2;
    statement3;
    .
    .
    .
    statementN;
#endif
```
If the macro with the name `macroToken` is defined, then the block of statements will be compiled normally, but if it is not defined, the compiler will simply skip this block of statements.

### Other Directives
Apart from the above directives, there are two more directives that are not commonly used. These are:
1. `#undef`
2. `#pragma`

#### `#undef` Directive
The `#undef` directive is used to **undefine** an existing macro. This directive works as:
```c++
#undef LIMIT
```
Using this statement will undefine the existing macro `LIMIT`. After this statement, every `#ifdef LIMIT` statement will evaluate as false.

#### `#pragma` Directive
This directive is a special purpose directive and is used to turn on or off some features. These types of directives are compiler-specific, i.e., they vary from compiler to compiler, and so, are not discussed here.

# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
