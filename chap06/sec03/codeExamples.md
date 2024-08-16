# Code Examples
## Output a PWM signal on the onboard LED
Following code makes GPIO 25 output a PWM signal of changing duty cycle. This causes the onboard LED, connected to GPIO 25, to glow gradually from being off to full intensity.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/pwm.h>

#define LED_PIN 25

uint16_t cc = 0;
uint8_t s;
uint8_t c;

void setup()
{
    // Initialize GPIO 25 to work with PWM
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN,true);
    gpio_set_function(LED_PIN,GPIO_FUNC_PWM);

    // Find out PWM slice and channel numbers for GPIO 25
    s = pwm_gpio_to_slice_num(LED_PIN);
    c = pwm_gpio_to_channel(LED_PIN);

    // Configure the PWM peripheral to output a base signal at 2.9985kHz.
    pwm_set_clkdiv_int_frac(s,41,11);
    pwm_set_wrap(s,999);
    pwm_set_chan_level(s,c,cc);
    pwm_set_enabled(s,true);
}

void loop()
{
    // Increase the duty cycle by 0.1% every 10ms.
    pwm_set_chan_level(s,c,cc++);
    cc %= 1000;
    sleep_ms(10);
}

int main()
{
    setup();
    while (true)
        loop();
}
```
# Back
[Back to Chapter 5](../pwm.md)
