# Code Examples
## Output a PWM signal on the onboard LED
Following code makes GPIO 25 output a PWM signal of changing duty cycle. This causes the onboard LED, connected to GPIO 25, to glow gradually from being off to full intensity.
```c++
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/pwm.h>

#define ledPin 25


int ccVal = 0;

void setup()
{
    gpio_init(ledPin);
    gpio_set_dir(ledPin, true);
    

    gpio_put(ledPin,true);
    sleep_ms(5000);
    gpio_set_function(ledPin,GPIO_FUNC_PWM);
   
    pwm_set_clkdiv_int_frac(pwm_gpio_to_slice_num(ledPin), 125, 0);  //Set DIV_i and DIV_f values
    pwm_set_wrap(pwm_gpio_to_slice_num(ledPin), 99); //Set TOP values
    pwm_set_enabled(pwm_gpio_to_slice_num(ledPin), 1); //Enable PWM
}

void loop()
{
    
    pwm_set_chan_level(pwm_gpio_to_slice_num(ledPin),pwm_gpio_to_channel(ledPin),ccVal++); Set CC values to go from 0 to max val
    ccVal%=100;//ccVal = ccVal%100;
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
