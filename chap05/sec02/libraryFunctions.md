# `hardware_adc` Library Functions
To use this library, add following to the C/C++ file,
```c++
#include <hardware/adc.h>
```
and following to the `CMakeLists.txt` file.
```cmake
target_link_libraries(projectName pico_stdlib hardware_gpio hardware_adc)
```

Following are some of the most commonly used functions for configuring the ADC.

## `adc_init()`
Initialize the ADC peripheral on the &mu;C.

## `adc_gpio_init(uint8_t pinNo)`
This function initializes a GPIO to work with an ADC input. 
- Function input `pinNo` can be any GPIO number that supports ADC input, i.e. 26 through 29.

## `adc_select_input(uint8_t adcIn)`
This function prepares an ADC input for reading.
- Function input `adcIn` can be any ADC input number, i.e. 0 through 5.

## `uint16_t adc_read()`
This function makes ADC to read voltage from the input selected using `adc_select_input(adcIn)` function.
- Function returns an unsigned integer in the range of 0-4095 that corresponds to the measured voltage.
# Next

[Code Examples](../sec03/codeExamples.md)

# Back

[Working of an ADc](../sec01/working.md)
