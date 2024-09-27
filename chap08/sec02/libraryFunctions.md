# `hardware_i2c` Library Functions
To use this library, add following to the C/C++ file,
```c++
#include <hardware/i2c.h>
```
and following to the `CMakeLists.txt` file.
```cmake
target_link_libraries(projectName pico_stdlib hardware_gpio hardware_i2c)
```

Following are some of the most commonly used functions for configuring and using the I<sup>2</sup>C peripheral.

## `uint i2c_init(i2c_inst_t* i2c, uint baudRate)`
Initialize a specific instance of I<sup>2</sup>C on the &mu;C.
- Function input `i2c` is a pointer to the I<sup>2</sup>C instance that should be initialized. The library already defines variables for both the instances. So, you only have to specify `i2c0` or `i2c1`.
- Function input `baudRate` is the baud rate, in bits/s, that the I<sup>2</sup>C instance should use for communication. It must be an unsigned integer number. For example, setting this value to 100000 means 100 kb/s baud rate, which is the standard mode.
- Function returns an unsigned integer representing the baud rate that was actually set.

## `int i2c_write_blocking(i2c_inst_t* i2c, uint8_t addr, const uint8_t* src, size_t len, bool nostop)`
Initiate an I<sup>2</sup>C message to write data to a target.
- Function input `i2c` is a pointer to the I<sup>2</sup>C instance that should be used for communication.
- Function input `addr` is the address of the target that the controller wants to communicate with. This must be the 7-bit address of the target.
- Function input `src` is the name of the array containing the data that the controller wants to write to the target. The datatype of the array must be `uint8_t`.
- Function input `len` is the size of the data in bytes that the controller is supposed to write to the target. Make sure that the size of array defined to hold the data is equal to or greater than this value.
- Function input `nostop` indicates whether the controller should send a stop condition after writing `len` bytes of data. If this value is `true` then stop condition is not sent otherwise it is sent. This is helpful in conveying a repeated start situation.
- Function returns a positive integer indicating the number of bytes that were written successfully. The return value might be -2 if the target with the `addr` wasn't present.
- This function doesn't exit until all the data is sent or an error occurred.

## `int i2c_read_blocking(i2c_inst_t* i2c, uint8_t addr, const uint8_t* dst, size_t len, bool nostop)`
Initiate an I<sup>2</sup>C message to read data from a target.
- Function input `i2c` is a pointer to the I<sup>2</sup>C instance that should be used for communication.
- Function input `addr` is the address of the target that the controller wants to communicate with. This must be the 7-bit address of the target.
- Function input `dst` is the name of the array where the data being received by the controller will be stored. The datatype of the array must be `uint8_t`.
- Function input `len` is the size of the data in bytes that the controller is supposed receive from the target. Make sure that the size of array defined to hold the data is equal to or greater than this value.
- Function input `nostop` indicates whether the controller should send a stop condition after receiving `len` bytes of data. If this value is `true` then stop condition is not sent otherwise it is sent. This is helpful in conveying a repeated start situation.
- Function returns a positive integer indicating the number of bytes received successfully. The return value might be -2 if the target with the `addr` wasn't present.
- This function doesn't exit until all the data is received or an error occurred.

## Next
[Code Examples](sec03/codeExamples.md)
