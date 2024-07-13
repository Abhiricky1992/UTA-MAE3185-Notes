# Arrays
An Array is a collection of fix-sized elements of the same type. It is used to store a collection of data. It is also helpful to think of as a collection of variables of the same datatype.

An array with name `val` can be created to store 100 values instead of declaring 100 variables with different names, such as `val1`, `val2`, `val3`, ..., `val100`. Each element in an array can be accessed through its index. For instance, the tenth element of array `val` can be accessed through `val[9]`.
```{note}
Indexing in C programming starts from 0, i.e. the first element of an array is located at index 0.
```

Arrays are stored in a contiguous memory, i.e. the memory allocated for an array is always a single continuous chunk. The lowest address corresponds to the first element and the highest address to the last element.
<p align="center">
  <img width="100%" src="./figs/arrayInMemory.svg">
</p>


## Declaring Arrays
To declare an array in C, you will have to specify the type of the elements and the number of elements needed in an array as follows
```c++
type arrayName [arraySize];
```
This is called a one-dimensional array. The `arraySize` must be an integer constant greater than zero and type can be any valid C data type. For example, to declare a 10-element array called balance of type double, following statement can be used
```c++
double balance[10];
```
Here, `balance` is an array that has 10 elements of type `double`.

## Accessing Array Elements
Any element of an array in C can be accessed using the array subscript operator `[]` and the index value `i` of the element. For example,
```c++
double salary = val[9];
```
The above statement will take the 10<sup>th</sup> element from the array `val` and assign the value to `salary` variable. Another way of accessing elements of an array is using Pointers, which will not be discussed here.

## Initializing Arrays
You can initialize an array in C using two methods, 1. Use initializer list, or 2. Use `for` loop. This section shows initialization of one-dimensional arrays only.
### Initializer List
An initializer list initializes elements of an array in the order of the list. For example, consider the snippet given below
```c++
int arr[5] = {1, 2, 3, 4, 5};
```
This initializes an array, `arr`, of size 5, with the elements `{1, 2, 3, 4, 5}` in order, i.e. `arr[0] = 1`, `arr[1] = 2`, and so on. We don’t have to initialize all the elements of an array at the definition. We can initialize first 3 elements only. For instance,
```c++
int arr[5] = {1, 2, 3};
```
But now, `arr[4]` and `arr[5]` will contain garbage values.
```{note}
Based on the compiler being used, uninitialized elements of an array may contain garbage values. So, proper initialization of the array elements is always advised.
```
### `for` Loop
If the values in an array follow a pattern then it is sometimes easier to use `for` loop to initialize an array. Following code shows how an array can be declared and then initialized using a `for` loop.
```c++
#include <stdio.h>

int main()
{
	int arr[5];                     // Declare the array
	for (int i=0; i<5; i++)         // Initialize the array
		arr[i] = i;

	for (int i=0; i<5; i++)         // Print the array
		printf("%d\n", arr[i]);

	return 0;
}
```

## Passing Arrays to Functions
Arrays can be used as arguments/parameters to functions. Here's an example that passes the array of test scores to a function whose purpose is to display the mean/average score of that test.
```c++
#include <stdio.h>

#define students 5								// Size of array
double arrayMean(unsigned int arr[students]);	// Function declaration

int main()
{
	unsigned int scores[students] = {73, 67, 85, 92, 79};	// Array of 5 variables

	printf("Class average for the test is: %f", arrayMean(scores));
	return 0;
}

double arrayMean(unsigned int arr[students])	// Function definition
{
	double total = 0;
	for (int j = 0; j < students; ++j)			// Read values from array
		total += arr[j];						// Find total
	return (total / students);					// Find average
}
```
In a function declaration, array arguments are represented by the data type and size of the array. Here's the declaration of the `arrayMean()` function:
```c++
double arrayMean(unsigned int arr[students]);	// Function declaration
```
Note that the array is provided as a parameter to the function along with the size. Actually, there is one unnecessary piece of information here. The following statement works just as well:
```c++
double arrayMean(unsigned int arr[]);	// Function declaration
```
The reason for this is the fact that C language does not care about the actual size of the array while passing it to a function. In fact, the function doesn't even receive the complete array in reality. It only receives the memory address to the first element in the array, which is also the name of the array, i.e. `scores` here, as shown in the snippet below,
```c++
printf("Class average for the test is: %f", arrayMean(scores));
```
You may also realize that C language would also not keep track of the valid index numbers due to the same reason. Thus, if you use invalid index numbers then it may cause severe run-time errors. This is the reason the size of the array is defined as a macro in this code so that it would be available to use throughout the code. If you do not prefer to use a macro for this purpose then you can also pass the size of the array to a function as a parameter as shown below,
```c++
double arrayMean(unsigned int arr[], const unsigned int size);	// Function declaration with array size as a parameter
```
Another way of passing arrays to functions is by using Pointers, which will not be discussed here.


# Back
[Back to Chapter 1](../summaryOfBasicCCppProgramming.md)
