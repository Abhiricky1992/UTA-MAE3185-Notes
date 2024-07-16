# Pulse Width Modulation
So far, we have generated and read digital voltage values using GPIOs, and read analog voltage values using ADC. The obvious next step would be to generate an analog voltage. This is generally done using a Digital to Analog Converter (DAC), an exact opposite of an ADC. However, the &mu;C we are using doesn't have a DAC as a peripheral. The next best thing that is available on the &mu;C is the Pulse Width Modulation (PWM) peripheral, sometimes also called a Timer or a Counter.

In a simple sense, PWM makes a GPIO output `HIGH` or `LOW` for a certain amount of time repetitively. If this is done fast enough, then the output voltage can be treated as an average for the devices that are slow to respond. For example, a human eye cannot perceive changes that happen faster than 60Hz. Thus, if an LED is turned on for 300&mu;s and then turned off for the next 700&mu;s repetitively, then a human eye would perceive it to be at 30% of its peak intensity. PWM is also very useful where an accurately timed pulse of `HIGH` voltage needs to be generated using a GPIO. This is generally helpful with motor drivers/controllers that treat the width of a `HIGH` pulse as motor power or angle.

You may think that this can also be done by manually changing the GPIO output state and then using the `sleep_ms` or `sleep_us` function to hold that state for a certain time period. You are correct, it is absolutely doable. However, understand that we are making the processor of the &mu;C do all these tasks and wasting the computational power as a result. On the other hand, since PWM is a peripheral, i.e. a physical component in the &mu;C, it does all this work and allows the processor to focus on the more important tasks.

There are 8 PWM slices, 0 through 7, on the RP2040 &mu;C with two channels, A and B, each. Each slice can operate independently of the other slices. However, the two channels of a slice allow the change of the ratio of `HIGH` time to `LOW` time only. This will be discussed in further detail in the upcoming section. Each GPIO on the &mu;C can be controlled by one of the channels of a certain PWM slice. Following tables defines this mapping.
|        GPIO        |   0    |   1    |   2    |   3    |   4    |   5    |   6    |   7    |   8    |   9    |   10   |   11   |   12   |   13   |  14   |  15   |
| :----------------: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :---: | :---: |
| **PWM<br>Channel** |   0A   |   0B   |   1A   |   1B   |   2A   |   2B   |   3A   |   3B   |   4A   |   4B   |   5A   |   5B   |   6A   |   6B   |  7A   |  7B   |
|      **GPIO**      | **16** | **17** | **18** | **19** | **20** | **21** | **22** | **23** | **24** | **25** | **26** | **27** | **28** | **29** |       |       |
| **PWM<br>Channel** |   0A   |   0B   |   1A   |   1B   |   2A   |   2B   |   3A   |   3B   |   4A   |   4B   |   5A   |   5B   |   6A   |   6B   |       |       |

```{note}
The same PWM channel can be selected on two GPIO pins; the same signal will appear on each GPIO.
```
