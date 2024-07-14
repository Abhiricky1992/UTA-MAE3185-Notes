# General Purpose Input Output
GPIOs are nothing but digital input/output pins, the state of which can be controlled directly by the software running on the processors, or by a number of other peripherals available in the &mu;C. As discussed in previous chapters, the RP2040 &mu;C has 30 GPIOs, out of which 4 can also be used as inputs to the chip's Analogue to Digital Converter (ADC). Each GPIO in RP2040 can perform a specific function of a specific peripheral. Section 1.4 of the [reference](../rp2040-datasheet.pdf) explains the function that each GPIO can perform for each peripheral that we may discuss throughout this course. 

The actual working of a GPIO pin requires understanding of how a transistor works. Thus, this chapter will attempt to explain working of a GPIO in a much simpler way. However, keep in mind that this simplified explanation is not really true.

## Sections
- [Section 1 - Working of a GPIO](./sec01/working.md)
- [Section 2 - `hardware_gpio` Library Functions](sec02/libraryFunctions.md)
- [Section 3 - Code Examples](sec03/codeExamples.md)

# Back to Introduction
[Back](../README.md)
