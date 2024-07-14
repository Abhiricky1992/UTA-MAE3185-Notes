# Code Examples
## Read Variable Voltage from a Potentiometer
Following code configures GPIO 27 to be used in conjunction with the ADC to read a variable voltage. This variable voltage is produced by a [Potentiometer](https://en.wikipedia.org/wiki/Potentiometer#Construction).
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/adc.h>

#define PIN 27
#define ADC_NUM 1

void setup()
{
    stdio_init_all();
    adc_init();                         // Initialize the ADC
    adc_gpio_init(PIN);                 // Initialize a GPIO
    adc_select_input(ADC_NUM);          // Select appropriate ADC Input for measurement
}

void loop()
{
    uint16_t x = adc_read();            // Read voltage on selected ADC Input
    printf("%fV\r\n",x/4095.0*3.3);     // Convert the unsigned integer into a voltage and print it
    sleep_ms(100);
}

int main()
{
    setup();
    while (true)
        loop();
}
```

# Back
[Back to Chapter 4](../adc.md)
