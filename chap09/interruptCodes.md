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
## State Machine
Following code repeats two tasks "OutTask" and "InTask" at intervals of 1s and 0.1s respectively using a combination of timer and interrupt.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/irq.h>
#include <hardware/timer.h>

#define outPin 16
#define inPin 17
#define ledPin 25

//Number of timers to be defined depend on the number of tasks
struct repeating_timer timer1;
struct repeating_timer timer2;
//Define the time intervals at which the tasks need to be repeated
const uint outTaskTime = 1e6;
const uint inTaskTime  = 1e5;


bool outPinState = 1;
//Callback function for OutTask
bool outTask(__unused struct repeating_timer *t) 
{
 gpio_put(outPin,outPinState);
 outPinState = !outPinState;

 printf("OutTask called at %lld\r\n",time_us_64());

 return true;

    
}
//Callback function for InTask
bool inTask(__unused struct repeating_timer *t) 
{
    bool inPinState = gpio_get(inPin);
    gpio_put(ledPin,inPinState);
    printf("inTask called at %lld\r\n",time_us_64());
    return true;

}

void setup()
{
    stdio_init_all();

    gpio_init(outPin);
    gpio_set_dir(outPin,true);

    gpio_init(inPin);
    gpio_set_dir(inPin,false);

    gpio_init(ledPin);
    gpio_set_dir(ledPin,true);
  
    //Timers and Interrupts
    add_repeating_timer_us(outTaskTime,outTask,NULL,&timer1);
    add_repeating_timer_us(inTaskTime,inTask,NULL,&timer2);
    
}

void loop()
{
 //Other things

}

int main()
{
    setup();

    while (true)
        loop();
}
```
