# Code Examples
## Turn Onboard LED On
The Raspberry Pi Pico board has a green LED already connected to GPIO 25. Following code configures GPIO 25 as an output and turns the LED on.
```c++
#include <pico/stdlib.h>
#include <hardware/gpio.h>

#define LED_PIN 25                  // Define a pin number macro to use it throughout the code

int main()
{
    gpio_init(LED_PIN);             // Initialize GPIO 25 to the default state
    gpio_set_dir(LED_PIN, true);    // Configure GPIO 25 as an output
    gpio_put(LED_PIN, true);        // Drive GPIO 25 to High

    while (true);
}
```
## Blink Onboard LED
Following code blinks the onboard LED and an external LED connected to GPIO 16
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>

#define ledPin1 25
#define ledPin2 16

void setup()
{
   stdio_init_all();
   gpio_init(ledPin1);
   gpio_init(ledPin2);
   gpio_set_dir(ledPin1,true);
   gpio_set_dir(ledPin2,true);

    
}

void loop()
{
   
    gpio_put(ledPin1,true);
    sleep_ms(1000);
    gpio_put(ledPin1,false);
    sleep_ms(1000);

    gpio_put(ledPin2,true);
    sleep_ms(200);
    gpio_put(ledPin2,false);
    sleep_ms(200);
  
}

int main()
{
    setup();

    while (true)
        loop();
}
```
## Read `HIGH` or `LOW` using a GPIO
Following code configures a GPIO as an input. The exact configuration can be set by changing values in `gpio_set_pulls` function.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>

void setup()
{
    stdio_init_all();

    gpio_init(0);
    gpio_set_dir(0,0);
    gpio_set_pulls(0,0,0); // Change GPIO input configuration to see different behavior
}

void loop()
{
    bool x = gpio_get(0); // Read GPIO state, i.e. HIGH or LOW
    printf("%u\r\n",x); // Print out the GPIO state as 1 or 0
}

int main()
{
    setup();
    while (true)
        loop();
}
```

- # Back
[Back to Chapter 4](../gpio.md)
