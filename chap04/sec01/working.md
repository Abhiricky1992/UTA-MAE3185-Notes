# Working of a GPIO
<p align="center">
<img width="100%" src = "./figs/ucOut.svg">
GPIO Junction on &mu;C Side vs the Physical Pin
  </p>

As the name suggests, a GPIO can broadly be configured either as an **Input** or as an **Output**. Keep in mind that the terms 'Input' and 'Output' here represent the direction of information transfer instead of the direction of the current flow. To make understanding different configurations easier, consider the above figure.

In the figure, think of the &squ; as the physical pin where a wire from some external circuit may be connected. While, the &#x25CF; represents a junction on the &mu;C side. The &mu;C may make different connections at this junction based on the configuration.

## GPIO Output
<p align="center">
<img width="100%" src = "./figs/ucOutLow.svg">
GPIO Config 1: Output Low
 </p>

 
<p align="center">
<img width="100%" src = "./figs/ucOutHigh.svg">
GPIO Config 2: Output High
</p>
  
In this configuration, a GPIO is either driven LOW or driven HIGH, i.e. it is connected to 0V/GND **(GPIO Config 1)** or 3.3V **(GPIO Config 2)** on the &mu;C side. The **Output** configuration is also known as a *Push-Pull* configuration in technical terms. There are other output configurations, called the *Open-Drain* and *Open-Collector* which are not discussed here and will not be used throughout this course.

Note that if a GPIO is configured as an output Low and 3.3V is connected to the physical pin then a short circuit is created. Similarly, a short circuit is also created when a GPIO is configured as an output High and 0V/GND is connected to the physical pin. Both of these situations are highly discouraged since the high current flow due to the short circuit may damage the &mu;C.

**Make sure you are not creating a short circuit when a GPIO is configured as an output**


## GPIO Input
In this configuration of the GPIO, the &mu;C measures the voltage at the junction with reference to the GND. To be more specific, a GPIO can have three different input configurations.
<p align="center">
<img width="100%" src="./figs/ucOut.svg">
GPIO Config: Input Floating
</p>

### Floating
In this configuration, the &mu;C measures voltage at the junction without connecting anything else to the junction as shown in the figure to the right. Thus, if the voltage on the physical pin is 3.3V then the &mu;C reads it as `1` or High. Or, if the voltage on the physical pin is 0V/GND then the &mu;C reads it as `0` or Low. 

The &mu;C is extremely sensitive to the voltage changes. Thus, if nothing is connected to the physical pin, i.e. the pin is in floating state, then touching the physical pin with your finger can change the voltage reading. Other two configurations exist to tackle this exact problem.
<p align="center">
<img width="100%" src="./figs/ucOutPd.svg">
GPIO Config: Input Pull-Down
</p>

### Pull-Down
In this configuration, 0V/GND is connected to the junction through a huge resistor (~65k&Omega;), known as a pull-down resistor, before the &mu;C measures the voltage at the junction, as shown in the figure. Same as the floating input, if the voltage on the physical pin is 3.3V or 0V/GND then the &mu;C reads it as `1` or `0` respectively. However, if the physical pin is floating, then the &mu;C would read `0`. This is because the junction is connected to GND through the resistor.


<p align="center">
<img width="100%" src="./figs/ucOutPu.svg">
GPIO Config: Input Pull-Up
</p>

### Pull-Up
Similar to Pull-Down configuration, 3.3V is connected to the junction, instead of 0V, through a huge resistor (~65k&Omega;), known as a pull-up resistor, before the &mu;C measures the voltage at the junction. Once again, similar to the floating input, if the voltage on the physical pin is 3.3V or 0V/GND then the &mu;C reads it as `1` or `0` respectively. However, if the physical pin is floating, then the &mu;C would read `1` since the junction is connected to 3.3V through the resistor.

```{note}
Pull-Down and Pull-Up input methods work fine only if there is no resistor before the physical pin larger than the pull-down/pull-up resistors. Think about the voltage drop in the case of two series resistors.
````


# Back
[Back to Chapter 4](../gpio.md)
