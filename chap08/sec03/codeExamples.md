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
## I<sup>2</sup>C communication between the &mu;C and the BNO055 Inertial Measurement Sensor (IMU)
Following code configures `i2c0` on the &mu;C to work in standard mode, i.e. at 100 kb/s baud rate. Then it communicates with the [BNO055](https://cdn-shop.adafruit.com/datasheets/BST_BNO055_DS000_12.pdf) temperature sensor to receive 18 byte long value containing the acceleration, magnetic strength  and orientation in euler angles.
```c++
#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>
#include <hardware/i2c.h>

#define sensAdd 0x28
#define amgMode 0b00000111
#define oprMode 0x3d

#define SDA 16
#define SCL 17

void setup()
{
    stdio_init_all();

    gpio_init(SCL);
    gpio_init(SDA);
    gpio_set_pulls(SCL, 1, 0);
    gpio_set_pulls(SDA, 1, 0);
    gpio_set_function(SCL, GPIO_FUNC_I2C);
    gpio_set_function(SDA, GPIO_FUNC_I2C);

    i2c_init(i2c0, 100000);

    // Setup sensor in AMG mode
    uint8_t sndData[2] = {oprMode, amgMode};
    i2c_write_blocking(i2c0, sensAdd, sndData, 2, true);
}

void loop()
{
    uint8_t sndData[1] = {0x8};//Address of UNIT_SEL ReG that contains the 18 bytes of data
    uint8_t recData[18] = {0};

    i2c_write_blocking(i2c0, sensAdd, sndData, 1, true);
    i2c_read_blocking(i2c0, sensAdd, recData, 18, true);

    float ax, ay, az, gx, gy, gz, mx, my, mz;

    ax = ((int16_t)(recData[0] | recData[1] << 8)) / 100.0;

    ay = ((int16_t)(recData[2] | recData[3] << 8)) / 100.0;
    az = ((int16_t)(recData[4] | recData[5] << 8)) / 100.0;

    mx = ((int16_t)(recData[6] | recData[7] << 8)) / 16.0;
    my = ((int16_t)(recData[8] | recData[9] << 8)) / 16.0;
    mz = ((int16_t)(recData[10] | recData[11] << 8)) / 16.0;

    gx = ((int16_t)(recData[12] | recData[13] << 8)) / 16.0;
    gy = ((int16_t)(recData[14] | recData[15] << 8)) / 16.0;
    gz = ((int16_t)(recData[16] | recData[17] << 8)) / 16.0;

    printf("%f\t%f\t%f\t%f\t%f\t%f\t%f\t%f\t%f\r\n", ax, ay, az, mx, my, mz, gx, gy, gz);
    sleep_ms(100);
}

int main()
{
    setup();
    while (true)
        loop();
}
```

