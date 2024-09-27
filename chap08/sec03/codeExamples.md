# Code Examples
## I<sup>2</sup>C communication between the &mu;C and an [MCP9808](https://ww1.microchip.com/downloads/en/DeviceDoc/25095A.pdf) temperature sensor
Following code configures `i2c1` on the &mu;C to work in standard mode, i.e. at 100 kb/s baud rate. Then it communicates with the [MCP9808](https://ww1.microchip.com/downloads/en/DeviceDoc/25095A.pdf) temperature sensor to receive a 2 byte long temperature value and converts it into a value with &deg;C unit.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/i2c.h>

#define SCL 7
#define SDA 6

// I2C stuff
#define sensAdd 0b0011000
#define tempCmd 0b00000101

void setup()
{
    stdio_init_all();

    gpio_init(SDA);
    gpio_set_pulls(SDA,1,0);
    gpio_set_function(SDA, GPIO_FUNC_I2C);

    gpio_init(SCL);
    gpio_set_pulls(SCL, 1, 0);
    gpio_set_function(SCL, GPIO_FUNC_I2C);

    i2c_init(i2c1, 100000);
}

void loop()
{
    uint8_t snd[1] = {tempCmd};
    uint8_t rec[2] = {0,0};
    i2c_write_blocking(i2c1,sensAdd,snd,1,true);
    i2c_read_blocking(i2c1,sensAdd,rec,2,false);

    uint8_t res[2] = {rec[0]&0b00001111,rec[1]};
    uint16_t tempInt = res[0]<<8|res[1];
    float temp = (float) tempInt*0.0625;
    printf("%.2f\r\n",temp);
}

int main()
{
    setup();

    while (true)
        loop();
}
```
