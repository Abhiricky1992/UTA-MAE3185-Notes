# Code Examples for Interrupts and Timers
## IRQ (Interrupt Switch)
Following code observes the state for the Switch Pin (Pin 16 on the microcontoller), intially connected to 3.3V  supply. Once the connection is broken, the interrupt registers an Event and calls a callback or trigger function that turns the onboard LED on. The LED should turn off when the connection is restablished.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/irq.h>

#define ledPin 25
#define swPin 16

//Callback Function
void gpioHandleEvent(uint pin, uint32_t event)
{
    if(event==GPIO_IRQ_EDGE_FALL)
        gpio_put(ledPin,true);
    else if(event==GPIO_IRQ_EDGE_RISE)
        gpio_put(ledPin,false);
}

void setup()
{
   stdio_init_all();
   gpio_init(ledPin);
   gpio_init(swPin);
   gpio_set_dir(ledPin,true);
   gpio_set_dir(swPin,false);
   gpio_set_pulls(swPin,0,1);

}

void loop()
{

    gpio_set_irq_enabled_with_callback(swPin,GPIO_IRQ_EDGE_FALL|GPIO_IRQ_EDGE_RISE,1,gpioHandleEvent);
    sleep_ms(2000);
    
   
}

int main()
{
    setup();

    while (true)
        loop();
}
```
## Using Encoder using Interrupts
Following code uses interrupts to count the events triggered by a encoder as it is rotating. These events are converted into the angle of rotation and the state of pin B gives the direction of rotation
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/irq.h>

#define pinA 16
#define pinB 17

int nEvents = 0;
void gpioHandleEvent(uint gpio, uint32_t event)
{
    bool pinStateB = gpio_get(pinB);
    //CCW
    if(event==GPIO_IRQ_EDGE_RISE && pinStateB==0)
        ++nEvents;
    else if(event==GPIO_IRQ_EDGE_FALL && pinStateB==1)
        ++nEvents;
    //CW
    if(event==GPIO_IRQ_EDGE_RISE && pinStateB==1)
        --nEvents;
    else if(event==GPIO_IRQ_EDGE_FALL && pinStateB==0)
        --nEvents;
}


void setup()
{
   stdio_init_all();
   gpio_init(pinA);
   gpio_set_dir(pinA,false);
   gpio_init(pinB);
   gpio_set_dir(pinB,false);

    
}

void loop()
{
    gpio_set_irq_enabled_with_callback(pinA,GPIO_IRQ_EDGE_FALL|GPIO_IRQ_EDGE_RISE,1,gpioHandleEvent);
    float angle  = (float) nEvents/4096*360;
    printf("%f deg\r\n",angle);
    sleep_ms(100);
    
}

int main()
{
    setup();

    while (true)
        loop();
}
```
