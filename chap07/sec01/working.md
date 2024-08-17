# Working
Let's first focus on the idea of "bit-by-bit transfer of information" for a while. For both devices to understand what each bit means, or to make sens of what a collection of bits mean, there has to be a set of rules that both devices must follow. A similar idea was used in **Morse Code**, where each character of the alphabet and the numbers were converted into a set of short and long pulses. These short and long pulses, dots and dashes, can then be transmitted and received through some medium, i.e. light, sound or voltage.

UART operates in a similar fashion. It defines how the bits of information should be grouped together into a **packet**. Then, the packet can be transmitted and received in the form of different voltage values at different times. Since each device, communicating through UART, has individual TX and RX pins, the TX pin is configured as a GPIO output while the reception pin is configured as a GPIO input. Now, the voltage in a wire connected between a TX pin and an RX pin can be changed by the TX pin and can be read by the RX pin.

## UART Packet
Each UART packet contains a start bit, 5-9 data bits, an optional parity bit and 1 or 2 stop bits.

<div class="js-anim">
<div style="display: grid; grid-template-columns: repeat(13, 1fr);">
<div style="grid-row: 1 / 2; grid-column: 1 / 2; width: 100%; height: 100%; border: 5px solid; border-radius: 10px; justify-self: center; align-self: center; text-align: center; vertical-align: middle;"><span style="color: white">Start<br>bit
</span>
</div>
<div style="grid-row: 1 / 2; grid-column: 2 / 11; width: 100%; height: 100%; border: 5px solid; border-radius: 10px; justify-self: center; align-self: center; text-align: center; vertical-align: middle;"><span style="color: white">5 - 9<br>Data bits
</span>
</div>
<div style="grid-row: 1 / 2; grid-column: 11 / 12; width: 100%; height: 100%; border: 5px solid; border-radius: 10px; justify-self: center; align-self: center; text-align: center; vertical-align: middle;"><span style="color: white">0 or 1<br>Parity<br>bits
</span>
</div>
<div style="grid-row: 1 / 2; grid-column: 12 / 14; width: 100%; height: 100%; border: 5px solid; border-radius: 10px; justify-self: center; align-self: center; text-align: center; vertical-align: middle;"><span style="color: white">1 or 2<br>Stop bits
</span>
</div>
</div>
</div>



- **Start Bit:** The voltage in the wire, connecting a TX pin to an RX pin, is held `HIGH` by the TX pin when there is no communication happening. To indicate the start of data transfer, the voltage in the wire is pulled to `LOW`. When the RX pin detects this change, it starts reading the voltage values.
- **Data Bits:** These bits are the actual information being transmitted. Based on what each bit is, i.e. `0` or `1`, the voltage in the wire is maintained to 0V or 3.3V for a certain period of time for each bit. There can be 5 to 9 data bits in a packet. And, in most cases, the least significant bit (LSB) is transmitted first.
- **Parity Bit:** A parity bit can be used to check the integrity of the data bits being transmitted. There are two types of parity checks, namely even and odd. For even parity check, if the number of `1`s in the data bits is even then the parity bit should be `0` otherwise it should be `1`. To the contrary, for odd parity check, if the number of `1`s in the data bits is odd then the parity bit should be `0` otherwise it should be `1`. Regardless of which type of parity check is used, if the parity bit corresponds to the correct number of `1`s in the data bits then it can be concluded that the transmission of the data bits was error free.
- **Stop Bits:** These 1 or 2 `HIGH` bits indicate the end of a packet.

Note that there can be many versions of a UART packet since the total number of bits in a packet is not fixed. Thus, both the devices communicating through UART must know the packet configuration in advance. The UART packet configuration is generally defined by three values as: `<nDataBits><nParityBits><nStopBits>`. For example, the 8N1 configuration means that the packet would contain 8 data bits, no parity bit and 1 stop bit. The 8N1 configuration is the most commonly used packet configuration.

Now that we understand how a UART packet is defined, let's take a look at an example. Following diagram shows a TX and an RX pin of two devices. The black line between them represents the voltage in the wire. The voltage in the wire over time is shown in the graph below. The text box allows you to enter a character, which is converted to a binary number as per the [ASCII encoding](https://en.wikipedia.org/wiki/ASCII). This binary number is transmitted through a UART packet with 8N1 configuration.


<div class="js-anim">
<div style="display: grid; grid-template-columns: 2fr 8fr 2fr; grid-template-rows: 1fr 1fr 1fr 4fr;">
<div style="grid-column: 1 / 2; grid-row: 1 / 4; padding: 20px; border: 5px solid #0064B1; border-radius: 30px; justify-self: center; align-self: center; vertical-align: middle; font-size: xx-large; font-weight: bold; color: #0064B1;"><span style="color: white"></span>
</div>
<div style="display: grid; grid-template-columns: 1fr 0.5fr 1fr 0.5fr 1fr; grid-column: 2 / 3; grid-row: 1 / 2; justify-self: center; align-self: center; vertical-align: middle; justify-items: space-evenly;">
<input id="uartSignalSig" type="text" class="js-anim" maxlength="1" size="8" onchange="uartSignalSig.handleChange()">
<div style="justify-self: center; align-self: center;">&rArr;
</div>
<div id="uartSignalSigToAscii" style="justify-self: center; align-self: center;">
</div>
<div style="justify-self: center; align-self: center;">&rArr;
</div>
<div id="uartSignalSigToBin" style="justify-self: center; align-self: center;"></div>
</div>
<div id="uartSignalWire" style="grid-column: 2 / 3; grid-row: 2 / 3; width: 100%; height: 5px; background-color: #f5f5f5; justify-self: center; align-self: center;">
</div>
<div style="grid-column: 3 / 4; grid-row: 1 / 4; padding: 20px; border: 5px solid #F58025; border-radius: 30px; justify-self: center; align-self: center; vertical-align: middle; font-size: xx-large; font-weight: bold; color: #F58025;"><span style="color: white">RX</span>
</div>
<div id="uartSignalSigPlot" style="grid-column: 1 / 4; grid-row: 4 / 5; justify-self:center; align-self:first baseline; width: 100%; border: 2px solid whitesmoke; border-radius: 10px;">
</div>
</div>
</div>
<script src="https://cdn.plot.ly/plotly-2.24.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
<script src="{{ '/assets/js/jsAnim.js'|relative_url }}"></script>
<script src="js/uartSignal.js"></script>


## Baud Rate
Note that so far in our discussion of UART protocol, we have not discussed when the RX pin should measure the voltage of the wire. As mentioned previously, UART is an asynchronous protocol, thus there is no clock signal instructing a device of when to measure the voltage. This issue is resolved by defining a Baud Rate, which specifies how many bits should be transferred per second. In other words, it defines the length of time for which the voltage corresponding to one bit will be maintained in the wire. Thus, the RX pin starts measuring wire voltage with a predefined time interval once it receives a start bit, i.e. once the wire voltage switches from `HIGH` to `LOW`. Following table lists the most commonly used baud rates, bit duration and the corresponding data rates for 8N1 configuration of the packet.

| Baud Rate (bits/s) | Bit Duration (&mu;s) | Data Rate (bits/s) |
| :----------------: | :------------------: | :----------------: |
|        9600        |       104.167        |        7680        |
|       19200        |        52.083        |       15360        |
|       38400        |        26.042        |       30720        |
|       57600        |        17.361        |       46080        |
|       115200       |        8.681         |       92160        |

Calculation of the data rate in the table above is quite straight forward. For 8N1 configuration, a packet contains 10 bits in total. Out of which, only 8 bits are data bits. Thus, there is only 8 bits of information transferred per 10 bits of transmission. Thus, if the baud rate was 9600 bits/s then the data rate would be 9600*0.8 = 7680 bits/s.
