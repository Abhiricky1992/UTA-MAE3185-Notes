# Scope Rules
Each identifier/variable that appears in a C program is visible (i.e. may be used) only in some portion of the source code called its *scope*. Following two types of C programming scopes will be useful in this book,
- Block scope
- File scope

## Block scope
The scope of any identifier declared between two consistent braces (`{}`) or as a function parameter, begins at the point of declaration and ends at the end of the block, i.e. at the closing brace `}`, or at the end of the function body.
```c++
#include <stdio.h>

void f(int n)                   // scope of the function parameter 'n' begins
{                               // the body of the function begins
    ++n;                        // 'n' is in scope and refers to the function parameter
    // int n = 2;               // error: cannot redeclare identifier in the same scope
    for(int n = 0; n<10; ++n)
    {                           // scope of loop-local 'n' begins
        printf("%d\n", n);      // prints 0 1 2 3 4 5 6 7 8 9
    }                           // scope of the loop-local 'n' ends
    // the function parameter 'n' is back in scope
    printf("%d\n", n);          // prints the value of the parameter
} // scope of function parameter 'n' ends

int main ()
{
  f(5);
  // int a = n; // Error: name 'n' is not in scope

  return 0;
}
```

## File scope
The scope of any identifier declared outside of any block or function parameter list begins at the point of declaration and ends at the end of the [translation unit](https://en.wikipedia.org/wiki/Translation_unit_(programming)). Such variables are also known as *global* variables.
```c++
#include <stdio.h>

int g;          // Global variable 'g' is declared
 
int main()
{
  int a = 10, b = 20;     // 'a' and 'b' has local scope
  g = a + b;
 
  printf ("value of a = %d, b = %d and g = %d\n", a, b, g); // 'g' is accessible since it has file scope.
 
  return 0;
}
```

## Nested scopes
If two different entities named by the same identifier are in scope at the same time, the scopes are nested (no other form of scope overlap is allowed), and the value that appears in the inner scope hides the value that appears in the outer scope,
```c++
#include <stdio.h>

int main()
{
    int a = 1; // the block scope of the name a begins here; hides file-scope a
    {
        int a = 2;          // the scope of the inner a begins here, outer a is hidden
        printf("%d\n", a);  // inner a is in scope, prints 2
    }                       // the block scope of the inner a ends here
    printf("%d\n", a);

    return 0;
}
```

## Initializing Local and Global Variables
When a local variable is defined, it is not initialized by the system, you must initialize it yourself. Global variables are initialized automatically to zero or `null` by the system. It is a good programming practice to initialize variables properly, otherwise your program may produce unexpected results, because uninitialized variables will take some garbage value already available at their memory location.

# Next

[Arrays](../sec09/functions.md)


# Back

[Functions](../sec11/arrays.md)
