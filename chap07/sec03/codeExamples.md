# Code Examples
## UART communication between two Raspberry Pi Picos
Following two codes configures two &mu;Cs to communicate through UART protocol. One &mu;C send characters `a`, `b` and 'p' at 1 second intervals. The second &mu;C reads the transmitted characters. It turns the LED connected to GPIO 25 on if character `a` is received. Otherwise, it turns the LED off if character `b` is received. 'p' has noeffect on the LED light.
```c++
#include <pico/stdlib.h>
#include <hardware/uart.h>
#include <hardware/gpio.h>

#define uartTx 16

void setup()
{
    gpio_init(uartTx);
    gpio_set_dir(uartTx, true);
    gpio_set_function(uartTx, GPIO_FUNC_UART);

    uart_init(uart0, 115200);
}

void loop()
{
    uart_putc(uart0, 'a'); // LED ON
    sleep_ms(1000);
    uart_putc(uart0, 'b'); // LED OFF
    sleep_ms(1000);
    uart_putc(uart0, 'p'); // Don't do anything
    sleep_ms(1000);
}

int main()
{
    setup();

    while (true)
        loop();
}
```

```c++
#include <pico/stdlib.h>
#include <hardware/uart.h>
#include <hardware/gpio.h>

#define ledPin 25
#define uartRx 17

void setup()
{
    gpio_init(ledPin);
    gpio_set_dir(ledPin, true);

    gpio_init(uartRx);
    gpio_set_dir(uartRx, false);
    gpio_set_function(uartRx, GPIO_FUNC_UART);

    uart_init(uart0, 115200);
}

void loop()
{
    char c = uart_getc(uart0);
    if (c == 'a')
        gpio_put(ledPin, 1);
    else if (c == 'b')
        gpio_put(ledPin, 0);
}

int main()
{
    setup();

    while (true)
        loop();
}
```
