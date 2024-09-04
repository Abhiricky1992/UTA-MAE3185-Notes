---
use_math : true
---

# Working of an ADC

As stated previously, an ADC measures voltage and converts that measured value into an appropriate number. To do this, an ADC needs a reference voltage, VREF, which is 3.3V in the case of the &mu;C we are using. Then the ADC maps the voltage range, GND - VREF, to a range of unsigned integer values.

Any ADC that you may encounter, either it's part of a &mu;C or is an Integrated Circuit (IC) itself, will have a predefined **bit depth**. What this means is that the range of numbers used to represent the measured voltage values can be between 0 - (2<sup>n</sup>-1), where n represents the bit depth. For example, the ADC available on the RP2040 is 12-bit. The numbers this ADC can use must be in range 0 - 4095. Thus, if the ADC outputs number 1123 then it must be reading


$$\begin{equation*}
1123 \cdot \frac{3.3V}{2^{12} - 1} = 0.905V
\end{equation*}$$

Note that the bit depth and the reference voltage both define the resolution of an ADC. For a 12-bit ADC that measures voltages from 0V-3.3V has a resolution of

$$\begin{equation*}
\frac{3.3V}{2^{12} - 1} = 0.0008058608V \approx 0.8mV
\end{equation*}$$

As opposed to this, an [Arduino Nano](https://store-usa.arduino.cc/products/arduino-nano?selectedStore=us) has 10-bit ADC that measures voltage in the range of 0V-5V. Thus, the resolution of the ADC on Arduino Nano would be


$$\begin{equation*}
\frac{5V}{2^{10} - 1} = 0.00488758553V \approx 5mV
\end{equation*}$$

Although an ADC has a resolution as high as 0.8mV, it doesn't mean it is accurate. The accuracy depends heavily on the stability of GND and VREF signals. For example, in Raspberry Pi Pico, the VREF signal provided to the ADC is not very accurate and thus the [datasheet (Section 4.3)](https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf#page=18) suggests that an external more stable 3.3V reference should be provided if higher ADC accuracy is desired.

# Next

[`hardware_adc` Library Functions](../sec02/libraryFunctions.md)

# Back
[Back to Chapter 4](../adc.md)
