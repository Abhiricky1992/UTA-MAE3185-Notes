# Variables
A variable is nothing but a name given to a storage area that our programs can manipulate. Each variable in C has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.

The name of a variable can be composed of letters, digits, and the underscore character. It must begin with either a letter or an underscore. Upper and lowercase letters are distinct because C is case-sensitive.

Apart from the basic types discussed in the previous section, C programming language also allows to define various other types of variables, which we will cover in subsequent chapters like Enumeration, Pointer, Array, etc. For this chapter, let us study only basic variable types.

## Variable Definition in C
A variable definition tells the compiler where and how much storage to create for the variable. A variable definition specifies a data type and contains a list of one or more variables of that type as follows
```c++
type variable_list;
```
Here, `type` must be a valid C data type including `char`, `w_char`, `int`, `float`, `double`, `bool`, or any user-defined object; and `variable_list` may consist of one or more identifier names separated by commas. Some valid declarations are shown here,
```c++
int    i, j, k;
char   c, ch;
float  f, salary;
double d;
```
The line `int i, j, k;` declares and defines the variables `i`, `j`, and `k`; which instruct the compiler to create variables named `i`, `j` and `k` of type `int`.

Variables can be initialized (assigned an initial value) in their declaration. The initializer consists of an equal sign followed by a constant expression as follows,
```c++
type variable_name = value;
```
Some examples are,
```c++
int d = 3, f = 5; // definition and initializing d and f.
char x = 'x';     // the variable x has the value 'x'.
```
# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
