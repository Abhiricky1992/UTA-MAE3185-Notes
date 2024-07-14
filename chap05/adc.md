# Analog to Digital Converter
A GPIO can measure only two voltage states, i.e. 0V or 3.3V. However, an Analog to Digital Converter (ADC) can measure a range of voltage and convert it into a corresponding number. As discussed previously, 4 GPIOs on RP2040, out of the 30 GPIOs available, are capable of measuring analog voltage. In fact, there are five possible inputs to the ADC available in RP2040 out of which four can measure voltage through a GPIO and one is connected to a temperature sensor inside the RP2040. Following table defines which ADC input is connected to what.
```{table}
| ADC Input  |    Connected to    |
| :--------: | :----------------: |
|     0      |      GPIO 26       |
|     1      |      GPIO 27       |
|     2      |      GPIO 28       |
|     3      |      GPIO 29       |
|     4      | Temperature Sensor |
```
## Sections
- [Section 1 - Working of an ADC](./sec01/working.md)
- [Section 2 - `hardware_adc` Library Functions](sec02/libraryFunctions.md)
- [Section 3 - Code Examples](sec03/codeExamples.md)

# Back to Introduction
[Back](../README.md)
