# `hardware_uart` Library Functions
To use this library, add following to the C/C++ file,
```c++
#include <hardware/uart.h>
```
and following to the `CMakeLists.txt` file.
```cmake
target_link_libraries(projectName pico_stdlib hardware_gpio hardware_uart)
```

Following are some of the most commonly used functions for configuring and using the UART peripheral.

## `uint uart_init(uart_inst_t* uart, uint baudRate)`
Initialize a specific instance of UART on the &mu;C.
- Function input `uart` is a pointer to the UART instance that should be initialized. The library already defines variables for both the instances. So, you only have to specify `uart0` or `uart1`.
- Function input `baudRate` is the baud rate, in bits/s, that the UART instance should use for communication. It must be an unsigned integer number.
- Function returns an unsigned integer representing the baud rate that was actually set.
- This function assumes that the 8N1 configuration for the UART packets should be used.

## `uart_putc(uart_inst_t* uart, char c)`
Transmit a character through the UART instance specified.
- Function input `uart` is a pointer to the UART instance that should be used to transmit the character.
- Function input `c` is a character being transmitted.
- This function doesn't exit until the character is sent.

## `char uart_getc(uart_inst_t* uart)`
Receive a character through the UART instance specified.
- Function input `uart` is a pointer to the UART instance that should be used to receive the character.
- Function returns the character recieved.
- This function doesn't exit until a character is received.
