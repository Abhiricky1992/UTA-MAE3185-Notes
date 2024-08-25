# Loops
Loops in programming are used to repeat a block of code until the specified condition is met. A loop statement allows programmers to execute a statement or group of statements multiple times without repetition of code.
There are mainly two types of loops in C Programming:
1. **Entry Controlled loops** are ones where the test condition is checked before entering the main body of the loop. `for` loop and `while` loop are Entry Controlled loops.
2. **Exit Controlled loops** are ones where the test condition is evaluated at the end of the loop body. The loop body will execute at least once, irrespective of whether the condition is `true` or `false`. `do`-`while` loop is an Exit Controlled loop.

## `for` Loop
`for` loop in C programming is a repetition control structure that allows programmers to write a loop that will be executed a specific number of times. `for` loop enables programmers to perform n number of steps together in a single line. Following is the syntax of a `for` loop.
```c++
for (initialization expression; condition expression; update expression)
{
    //
    // body of for loop
    //
}
```
In `for` loop, a loop variable is used to control the loop. First, the loop variable is initialized with some value, then the condition is checked. If the statement is `true` then control will move to the body and the body of the `for` loop will be executed. The update expression is executed to update the value of the loop variable. Now the condition is checked again with the new value of the loop variable. These steps will be repeated till the condition expression results to `false`. Following code shows the usage of a `for` loop.
```c++
#include <stdio.h>

int main()
{
    int i = 0;
    for (i = 1; i <= 10; i++)
    {
        printf( "Hello World\n");  
    }
    return 0;
}
```

## `while` Loop
A `while` loop does not depend upon the number of iterations. In `for` loop, the number of iterations were known in advance but in the `while` loop, the execution is terminated on the basis of the condition expression. If the condition results in a `false` then the `while` loop will break, otherwise the `while` loop body is executed. Following is the syntax of a `while` loop.
```c++
while (condition expression)
{
    // body of the while loop
}
```
Following code shows the use of a `while` loop.
```c++
#include <stdio.h>

int main()
{
    int i = 2;
    while(i < 10)
    {
        printf( "Hello World\n");
        i++;
    }

    return 0;
}
```

## `do`-`while` Loop
The `do`-`while` loop is similar to a `while` loop but the only difference is that the `do`-`while` loop checks the condition at the end of the body. In `do`-`while` loop, the loop body will execute at least once irrespective of the condition result. Following is the syntax of a `do`-`while` loop.
```c++
do
{
    // body of do-while loop
} while (condition expression);
```
Following code shows the use of a `do`-`while` loop.
```c++
#include <stdio.h>

int main()
{
    int i = 2;
    do
    {
        printf( "Hello World\n");
        i++;
    } while (i < 1);

    return 0;
}
```

## Loop Control Statements
Loop control statements in C programming are used to change execution from its normal sequence. C language supports the following control statements,
- [`break;`](https://www.geeksforgeeks.org/cpp-break-statement/) terminates the loop or `switch` statement and transfers execution to the statement immediately following the loop or `switch`.
- [`continue;`](https://www.geeksforgeeks.org/continue-statement-cpp/) causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.
- [`goto`](https://www.geeksforgeeks.org/goto-statement-in-c-cpp/) transfers control to the labeled statement.

## Infinite Loop
A loop becomes an infinite loop if a condition never becomes `false`. The `for` loop is traditionally used for this purpose. Since the three expressions that form the `for` loop are not required, you can make an endless loop by leaving the conditional expression empty.
```c++
#include <stdio.h>
 
int main () {

   for( ; ; )
   {
      printf("This loop will run forever.\n");
   }

   return 0;
}
```
When the conditional expression is absent, it is assumed to be `true`. You can achieve the same result with `while (true)`.

# Next 

[Functions](../sec09/functions.md)

# Back

[Decision Making](../sec07/decisionMaking.md)
