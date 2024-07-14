# The &mu;C and Code Development
The &mu;C that we are going to study throughout this course is [RP2040](https://www.raspberrypi.com/products/rp2040/) which is designed and manufactured by [Raspberry Pi](https://www.raspberrypi.com/). As discussed in previous chapter, a &mu;C on its own is not sufficient to run a program. It for sure needs a clock signal, components that would help provide required power, maybe an external flash and some resistors and capacitors that might be necessary for a proper functioning of the &mu;C.

Rather than dealing with all this on our own, we'll use a board known as [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) which is built around RP2040 &mu;C. We could have also used any of the following boards, which also uses RP2040, with none to minimal change in our code.
- [Adafruit Feather RP2040](https://www.adafruit.com/product/4884)
- [Pimoroni Pico LiPo](https://shop.pimoroni.com/products/pimoroni-pico-lipo?variant=39335427080275)
- [SparkFun Pro Micro RP2040](https://www.sparkfun.com/products/18288)
- [Arduino Nano RP2040 Connect](https://store-usa.arduino.cc/collections/boards/products/arduino-nano-rp2040-connect)

**We'll refer to the Raspberry Pi Pico board as the &mu;C from here on out unless stated otherwise.**

The appendix on the Software Installation provides steps to install all the software necessary to write and compile code/program that can run on the &mu;C. At the end of the appendix, the steps to compile a code/program are also provided. In this chapter, we'll go over a simple program and discuss how the code development process works.

## Sections
- [Section 1 - RP2040 and Raspberry Pi Pico](./sec01/raspberryPiPico.md)
- [Section 2 - Code Development Process](sec02/codeDevelopmentProcess.md)
- [Section 3 - &mu;C-Laptop Communication](sec03/ucLaptopComm.md)

# Back to Introduction
[Back](../intro.md)
