# Information Storage in &mu;C
Now that we know how all the operations inside a &mu;C or a &mu;P are synced, let's discuss where the information, on which these operations are applied, is stored. Specifically for a &mu;C, the three places where information is generally stored are: Flash, RAM and Register.

## Flash
Flash is an electrically programmable non-volatile memory. The term 'Non-Volatile Memory' means that it doesn't require power to maintain the integrity of the information stored in it. It generally holds the program that would run on a &mu;C. In current time, flash memory capacity for a &mu;C varies from a couple of MBs to close to a GB since an external flash chip can be connected. Keep in mind that flash has the lowest data transfer rate out of all the places available on a &mu;C for storing information. Moreover, the number of times a flash can be written with new information is limited. However, this limit is quite high so it's not a major concern.

## RAM
RAM, Random Access Memory, is a volatile memory, i.e. the information in the RAM is lost during power cycles. RAM generally contains the program or chunks of a program that might be running on the &mu;C. The data transfer speed of a RAM is much higher than that of a flash. Moreover, a RAM can access and update any information stored in it anywhere while a flash has to do this process in big chunks. However, the capacity of RAM available in a &mu;C is generally limited to a few MBs since the RAM has to be on the same chip as the &mu;C.

## Register
A register is the smallest element of information storage in a &mu;C. A &mu;C has the fastest access to the contents of a register. For the intents and purposes of this class, the registers can be split into two groups: Core registers and Configuration registers. The core registers are an essential part of the processor and hold the information or instructions that the &mu;C is working on at that moment. The configuration registers on the other hand are part of the peripherals and are used to configure different aspects of a peripheral. Moreover, these configuration registers can have a predefined reset value so that a peripheral can be set to a known state when the &mu;C starts up.

The size of all the registers inside a &mu;C is fixed and can be 8-bits, 16-bits, 32-bits or 64-bits for different &mu;Cs. Note that these sizes are similar to the sizes of different data types available in programming. Thus, you can think of a register as a collection of blocks where each block contains a 0 or a 1. The information inside each block or bit may have a physical meaning in the case of a configuration register. Thus, a need may arise where you have to change a single bit of a 32-bit register.

Following two videos explain how exactly registers work if you want to know more.

[![Exploring How Computers Work](https://img.youtube.com/vi/QZwneRb-zqA/0.jpg)](https://www.youtube.com/embed/QZwneRb-zqA)

[![How do Computers Remember](https://img.youtube.com/vi/I0-izyq6q5s/0.jpg)](https://www.youtube.com/embed/I0-izyq6q5s)

# Back 

[Back to Chapter 2](../preliminaries.md)
