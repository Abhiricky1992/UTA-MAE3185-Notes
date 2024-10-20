# Clock Controls Everything
In the last section where we discussed that the &mu;Cs are now reaching 1GHz of base clock speed, you might have wondered what the term 'Clock Speed' even means. Although the quantity '1GHz' sounds very familiar since it is used to loosely reflect the processing power, not everyone understands its true meaning and its relation to the 'Clock Speed'.

Understand that the &mu;Cs and &mu;Ps are digital devices, and they operate on binary information. Thus, any signal inside a &mu;C or a &mu;P can only be in either of the two states, i.e. on or off, while being measured. However, the signal can have any value in between while switching from one state to the other. This requires the signal measurement to be done only when the signal is stabilized in either of the two states. A **Clock** is used to sync all the functional blocks on a &mu;C or a &mu;P to perform this signal measurement operation at the same time, or to accurately time execution of any operation in general.

A clock is nothing but an accurate sinusoidal signal generated by a crystal oscillator. Crystal oscillators have a quartz crystal in them. These crystals start to vibrate at a certain frequency when a voltage is applied across it. This vibration also modulates the voltage supplied to it and causes it to have accurate sinusoidal oscillations. This sinusoidal voltage signal is used by a &mu;C or a &mu;P to sync all of its functional blocks/peripherals. Thus, if this sinusoidal signal stops for some reason then the &mu;C or the &mu;P will also stop working even if they are being supplied with electric power. Moreover, since an operation happens inside a &mu;C or a &mu;P per one cycle of the clock signal, higher the clock frequency/speed roughly means higher the computational performance.

Note that the name 'Quartz Watch' comes from the usage of a quartz crystal oscillator inside them as an accurate time source. Following is a fun video explaining how quartz watch works.

[![How a Quartz Watch Works](https://img.youtube.com/vi/_2By2ane2I4/0.jpg)](https://www.youtube.com/embed/_2By2ane2I4)

# Back 

[Back to Chapter 2](../preliminaries.md)
