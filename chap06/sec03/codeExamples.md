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
## PWM DC Motor
Use PWM signals to repeatedly turn a DC motor clockwise from zero to full speed and then rotate it again from zero to full speed  in the reverse direction direction
```c++
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/pwm.h>

#define in1 0
#define in2 15
#define ledPin 25

int ccVal = 0;

void setup()
{
    gpio_init(in1);
    gpio_set_dir(in1, true);
    gpio_set_function(in1, GPIO_FUNC_PWM);

    gpio_init(in2);
    gpio_set_dir(in2, true);
    gpio_set_function(in2, GPIO_FUNC_PWM);

    gpio_init(ledPin);
    gpio_set_dir(ledPin,true);
    gpio_put(ledPin,true);

    pwm_set_clkdiv_int_frac(pwm_gpio_to_slice_num(in1), 125, 0);
    pwm_set_wrap(pwm_gpio_to_slice_num(in1), 99);

    pwm_set_clkdiv_int_frac(pwm_gpio_to_slice_num(in2), 125, 0);
    pwm_set_wrap(pwm_gpio_to_slice_num(in2), 99);

    
    pwm_set_enabled(pwm_gpio_to_slice_num(in2), 1);
    pwm_set_enabled(pwm_gpio_to_slice_num(in1), 1);

}

void loop()
{
    pwm_set_chan_level(pwm_gpio_to_slice_num(in2), pwm_gpio_to_channel(in2), 0);
    for (int i = 0; i < 100; ++i)
    {
        pwm_set_chan_level(pwm_gpio_to_slice_num(in1), pwm_gpio_to_channel(in1), i);
        sleep_ms(100);
    }
    pwm_set_chan_level(pwm_gpio_to_slice_num(in1), pwm_gpio_to_channel(in1), 0);
    for (int i = 0; i < 100; ++i)
    {
        pwm_set_chan_level(pwm_gpio_to_slice_num(in2), pwm_gpio_to_channel(in2), i);
        sleep_ms(100);
    }
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
