# Strings

Strings are nothing but one-dimensional arrays of datatype `char` terminated by a null character '\0'. The following declaration and initialization creates a string consisting of the word "Hello". To hold the null character at the end of the array, the size of the character array containing the string is one more than the number of characters in the word "Hello."
```c++
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
```
Following is another way of initializing a string,
```c++
char greeting[6] = "Hello";
```
Note that, with this approach, you do not place the null character at the end of a string constant. The C compiler automatically places the '\0' at the end of the string when it initializes the array. Let us try to print the above-mentioned string,
```c++
#include <stdio.h>

int main () {

   char greeting[6] = "Hello";
   printf("Greeting message: %s\n", greeting );
   return 0;
}
```
Following is the output of the code snippet given above,
```none
Greeting message: Hello
```
C language supports a wide range of functions that manipulate null-terminated strings,
```{table}
|                             Function                             | Use                                                                                 |
| :--------------------------------------------------------------: | :---------------------------------------------------------------------------------- |
| [strcpy(s1,s2)](https://cplusplus.com/reference/cstring/strcpy/) | Copies string s2 into string s1.                                                    |
| [strcat(s1,s2)](https://cplusplus.com/reference/cstring/strcat/) | Concatenates string s2 onto the end of string s1.                                   |
|   [strlen(s)](https://cplusplus.com/reference/cstring/strlen/)   | Returns the length of string s1.                                                    |
| [strcmp(s1,s2)](https://cplusplus.com/reference/cstring/strcmp/) | Returns 0 if s1 and s2 are the same; less than 0 if s1<s2; greater than 0 if s1>s2. |
|  [strchr(s,c)](https://cplusplus.com/reference/cstring/strchr/)  | Returns a pointer to the first occurrence of character ch in string s1.             |
| [strstr(s1,s2)](https://cplusplus.com/reference/cstring/strstr/) | Returns a pointer to the first occurrence of string s2 in string s1.                |
```
The following example uses some of the above-mentioned functions,
```c++
#include <stdio.h>
#include <string.h>

int main()
{
   char str1[12] = "Hello";
   char str2[12] = "World";
   char str3[12];
   int  len ;

   /* copy str1 into str3 */
   strcpy(str3, str1);
   printf("strcpy(str3, str1): %s\n", str3);

   /* concatenates str1 and str2 */
   strcat(str1, str2);
   printf("strcat(str1, str2): %s\n", str1);

   /* total lenghth of str1 after concatenation */
   len = strlen(str1);
   printf("strlen(str1): %d\n", len);

   return 0;
}
```
Following is the output of the code snippet given above,
```none
strcpy(str3, str1): Hello
strcat(str1, str2): HelloWorld
strlen(str1): 10
```
# Back

[Preprocessors](../sec13/preprocessors.md)

# Back

[Arrays](../sec11/arrays.md)
