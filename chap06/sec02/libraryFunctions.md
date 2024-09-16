# `hardware_pwm` Library Functions
To use this library, add following to the C/C++ file,
```c++
#include <hardware/pwm.h>
```
and following to the `CMakeLists.txt` file.
```cmake
target_link_libraries(projectName pico_stdlib hardware_gpio hardware_pwm)
```

Following are some of the most commonly used functions for configuring the PWM peripheral.

## `uint8_t pwm_gpio_to_slice_num(uint8_t pinNo)`
Get the PWM slice number for a GPIO number.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.
- Function returns a slice number, 0 through 7, corresponding to the GPIO number provided.

## `uint8_t pwm_gpio_to_channel(uint8_t pinNo)`
Get the PWM channel number for a GPIO number.
- Function input `pinNo` can be any GPIO number, i.e. 0 through 29.
- Function returns a channel number, 0 or 1, corresponding to the GPIO number provided.

## `pwm_set_clkdiv_int_frac(uint8_t sliceNum, uint8_t divInt, uint8_t divFrc)`
Configure the clock divider integer and fractional values.
- Function input `sliceNum` is the PWM slice number that you may want to configure.
- Function input `divInt` is the 8-bit integer part of the clock divider, 1 through 255.
- Function input `divFrc` is the 4-bit fractional part of the clock divider, 0 through 15.

## `pwm_set_wrap(uint8_t sliceNum, uint16_t top)`
Configure the counter wrap value.
- Function input `sliceNum` is the PWM slice number that you may want to configure.
- Function input `top` is the 16-bit counter wrap value, 0 through 65535.

## `pwm_set_chan_level(uint8_t sliceNum, uint8_t chanNum, uint16_t cc)`
Configure the counter compare value.
- Function input `sliceNum` is the PWM slice number that you may want to configure.
- Function input `chanNum` is the channel number of the slice that you may want to configure.
- Function input `cc` is the 16-bit counter compare value, 0 through 65535.

## `pwm_set_enabled(uint8_t sliceNum, bool enabled)`
Enable or disable the PWM output.
- Function input `sliceNum` is the PWM slice number that you want to enable or disable.
- Function input `enabled` must be a boolean value, i.e. `0` to disable the output and `1` to enable the output.

# Next

[Code Examples](../sec03/codeExamples.md)

# Back

[Working of a PWM](../sec01/working.md)
