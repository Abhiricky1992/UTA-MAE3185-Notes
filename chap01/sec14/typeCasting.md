# Type Casting
Converting one datatype into another is known as type casting or, type-conversion. For example, if you want to store a long value into a simple integer then you can type cast `long` to `int`. You can convert the values from one type to another explicitly using the cast operator as follows,
```c++
(typeName) expression
```
Consider the following example where the cast operator causes the division of one integer variable by another to be performed as a floating-point operation,
```c++
#include <stdio.h>

int main()
{
   int sum = 17, count = 5;
   double mean;

   mean = (double) sum / count;
   printf("Value of mean: %f\n", mean);

   return 0;
}
```
When the above code is compiled and executed, it produces the following result,
```none
Value of mean: 3.400000
```
It should be noted here that the cast operator has precedence over division, so the value of sum is first converted to type double and finally it gets divided by count yielding a double value.

Type conversions can also be [implicit](https://www.geeksforgeeks.org/implicit-type-conversion-in-c-with-examples/) which is performed by the compiler automatically, or it can be specified explicitly through the use of the cast operator. It is considered good programming practice to use the cast operator whenever type conversions are necessary.


# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
