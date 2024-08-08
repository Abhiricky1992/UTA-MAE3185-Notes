# Inter-Integrated Circuit
Similar to UART protocol, that we discussed in last chapter, I<sup>2</sup>C (Inter-Integrated Circuit) is also a communication protocol. It also uses two wires, but one for a clock signal and the other for the data transmission in this case. Thus, I<sup>2</sup>C is a synchronous protocol since all the devices communicating through I<sup>2</sup>C use the same reference clock signal to operate. Moreover, I<sup>2</sup>C allows more than 2 devices to share a set of wires for communication, which was the biggest drawback in the case of UART.

The direction of information flow in I<sup>2</sup>C communication is controlled by a single device at a given time. This device is termed as a **Controller**. Other devices that take instructions from the controller are termed as **Target**s. The I<sup>2</sup>C protocol allows for multiple controllers and multiple targets connected to a set of clock and data lines, wires carrying clock and data signals. Following figure shows a general wiring configuration for I<sup>2</sup>C communication,

<p align="center">
<img width="100%" src = "./figs/connectionDiagram.svg">
I<sup>2</sup>C Connection Diagram
  </p>
  
The two wires, clock and data lines, are called **SCL** (Serial Clock) and **SDA** (Serial Data) respectively. Note that the two lines are connected to V<sub>dd</sub>, 3.3V in case of RP2040, through a resistor. This represents the Pull-Up configuration that we discussed in Chapter 4. In the idle state, i.e. when no communication is happening, pins of all devices connected SCL and SDA are in Input configuration. Thus, the pull-up resistors keep the voltage in SCL and SDA lines high. Moreover, these pins change the configuration between Input and Output based on whether a device is supposed to control the line voltage or not at a given moment. This process is discussed in further detail in the next section.

The RP2040 has two independent I<sup>2</sup>C instances, `i2c0` and `i2c1`. Each instance can be connected to multiple GPIOs with a specific function, SCL or SDA, as given in the [Pinout Diagram](../Pico-R3-A4-Pinout.df). The external physical pull-up resistors are not needed here since the internal pull-up configuration for the &mu;C can be set up through software. However, if no device communicating through I<sup>2</sup>C have pins with internal pull-up configuration then the physical pull-up resistors are necessary. In any case, the wiring for I<sup>2</sup>C communication with the &mu;C can be done as shown below,
```{figure} ./figs/connectionComp.svg
---
class: p-2
---
```
```{tableofcontents}
```
