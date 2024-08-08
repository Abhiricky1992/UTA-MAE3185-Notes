# Code Examples
## UART communication between two Raspberry Pi Picos
Following two codes configures two &mu;Cs to communicate through UART protocol. One &mu;C send characters `a` and `d` at 1 second intervals. The second &mu;C reads the transmitted characters. It turns the LED connected to GPIO 25 on if character `a` is received. Otherwise, it turns the LED off if character `d` is received.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/uart.h>

#define UART_TX 12  // Define the GPIO used as UART TX pin

void setup()
{
    stdio_init_all();
    uart_init(uart0, 9600); // Initialize UART instance 0 with baud rate of 9600 bits/s

    gpio_init(UART_TX); // Configure the GPIO to work in conjuction with UART
    gpio_set_function(UART_TX, GPIO_FUNC_UART);
}

void loop()
{
    uart_putc(uart0, 'd'); // Transmit character 'd' through UART
    sleep_ms(1000); // Wait for 1 second
    uart_putc(uart0, 'a'); // Transmit character 'a' through UART
    sleep_ms(1000); // Wait for 1 second
}

int main()
{
    setup();
    while (true)
        loop();
}
```

```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/uart.h>

#define UART_RX 1   // Define the GPIO used as UART RX pin
#define LED_PIN 25  // Define the LED pin

void setup()
{
    stdio_init_all();

    uart_init(uart0,9600);  // Initialize UART instance 0 with baud rate of 9600 bits/s

    gpio_init(UART_RX); // Configure the GPIO to work in conjuction with UART
    gpio_set_function(UART_RX,GPIO_FUNC_UART);
    gpio_init(LED_PIN); // Configure the GPIO as an output
    gpio_set_dir(LED_PIN,true);
}

void loop()
{
    char c = uart_getc(uart0);  // Receive a character through UART
    if (c == 'd')   // If the received character is 'd' then turn the LED off
        gpio_put(LED_PIN,0);
    else if (c == 'a')  // Else if the received character is 'a' then turn the LED on
        gpio_put(LED_PIN,1);
}

int main()
{
    setup();
    while (true)
        loop();
}
```
