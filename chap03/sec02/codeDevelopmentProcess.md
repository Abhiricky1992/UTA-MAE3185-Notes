# Code Development Process
You created a folder in section HelloWorld! of Software Installation chapter with three files. Such a folder with a C/C++ file, the `pico_sdk_import.cmake` file and a `CMakeLists.txt` will be called a 'Project Folder'. Following is the directory structure of a project folder,
```
project_folder
├── build
│   └── Files compiled by cmake
├── CMakeLists.txt
├── *.c
└── pico_sdk_import.cmake
```
Each of these files contain following information,
- **`*.c`** contains the code/program that will be compiled and will eventually run on the &mu;C.
- **`pico_sdk_import.cmake`** is available in the 'Raspberry Pi Pico C/C++ SDK'. It contains helper functions specific to the RP2040 &mu;C that can be used inside `CMakeLists.txt` to facilitate the compilation process.
- **`CMakeLists.txt`** is used by `cmake` to discover source files, determine what kind of output files to generate, compile the code, etc.

Out of these three files, you'll have to worry about the C/C++ file and the `CMakeLists.txt` files only. Let's take an example to learn how the compilation process works. Create a new folder anywhere you like. You can copy the `pico_sdk_import.cmake` file from section HelloWorld! into this folder.
```{attention}
Don't keep your 'Project Folder' in the 'Downloads' folder if you are using a **Mac** device.
```
Each project folder can have multiple C/C++ files. However, that situation will not arise throughout this class. So, create a C/C++ file with whatever name you like, don't keep any <kbd>Space</kbd> in the name.

## Analyzing the C/C++ file
Copy following content into the C/C++ file that you have just created.
```c++
#include <stdio.h>
#include <pico/stdlib.h>

int main()
{
    stdio_init_all();

    while (true)
        printf("Hello World!\r\n");
}
```
You might have noticed that this is a stripped down version of the code that you compiled in HelloWorld! section. Moreover, you might also understand the majority of the code from your C/C++ programming days. What might be new to you is,
- `#include <pico/stdlib.h>`: This line includes `stdlib.h` library available in 'Raspberry Pi Pico C/C++ SDK'. This library in itself is a collection of other libraries that allow us to perform some basic operations like using a `printf()` function. It also handles whether the output of the `printf()` function will be sent to USB or UART, more on this later. This is the only 'Higher Level Library' that we'll use in this class. All the other libraries that we'll use are classified as 'Hardware Support Libraries' in the Raspberry Pi Pico C/C++ SDK [documentation](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf).
- `stdio_init_all();`: This is a function available in one of the libraries that `stdlib.h` includes. It makes the &mu;C to initialize all the default 'Standard Input Output', hence `stdio`, peripherals. In simple words, it makes the &mu;C send the output of the `printf()` function to either USB or UART or both based on the configuration available in the `CMakeLists.txt` file.

## Analyzing the `CMakeLists.txt`
Now, copy following content into a `CMakeLists.txt` file and then take a look at the comments, the contents after `#` symbol.
```cmake
cmake_minimum_required(VERSION 3.13)            # Specify the minimum required version of cmake
set(ENV{PICO_SDK_PATH} "~/pico/pico-sdk/")      # Specify the path to Raspberry Pi Pico C/C++ SDK in your system
include(pico_sdk_import.cmake)                  # Include the contents of the pico_sdk_import.cmake file that exists in the same folder
project(myProject C CXX ASM)                    # Specify the name of the project and the type of source files it may contain

set(CMAKE_C_STANDARD 11)                        # Specify what C standard to follow
set(CMAKE_CXX_STANDARD 17)                      # Specify what C++ standard to follow
pico_sdk_init()                                 # Initialize necessary components of the SDK

add_executable(myProject                        # This is where the name of the C/C++ file will go.
*.c
)
pico_add_extra_outputs(myProject)               # Tell cmake to create a UF2 file

pico_enable_stdio_usb(myProject 1)              # Configures USB as the 'Standard Input Output'
pico_enable_stdio_uart(myProject 0)             # Don't configure UART as the 'Standard Input Output'

target_link_libraries(myProject pico_stdlib)    # Link libraries that are used in this project
```
Most of the content in `CMakeLists.txt` will stay the same for all the project folders you may create in this course. Following are the lines that may change,
- `project(myProject C CXX ASM)`: This is where you provide a name for your project. This name will also be the name of the `.uf2` file that gets generated inside the 'build' folder after the compilation process. Note that the project name, i.e. `myProject` in this case, is used at multiple places throughout the file. So, if you are changing it here then it needs to be changed everywhere.
- `add_executable(myProject *.c)`: You'll put the name of the C/C++ file in your project folder in place of `*.c`. The name of the C/C++ file can be anything.
- `target_link_libraries(myProject pico_stdlib)`: This is where you'll specify what libraries from 'Raspberry Pi Pico C/C++ SDK' are being used in this project. In this case, the C/C++ file includes `pico/stdlib.h`. Thus, the `CMakeLists.txt` file contains `pico_stdlib`. Note the replacement of `/` with `_` and the omission of `.h`. As another example, if the C/C++ file included `hardware/pwm.h`, then we'd put `hardware_pwm` in the `CMakeLists.txt` file.

Starting next chapter, we'll discuss different peripherals available in the &mu;C. Thus, you'll have to add the libraries for the specific peripheral you might be working on in the C/C++ file and the `CMakeLists.txt` file, and you'll be all set to use the functions available in that library. These notes will discuss some important functions for each peripheral. However, if you want to know more about the functions available in a specific library, then you can always look at the [SDK documentation](https://raspberrypi.github.io/pico-sdk-doxygen/).

## Copy the Code to the &mu;C
You can build/compile this code into a `.uf2` file by clicking on the 'Build' button in VSCode. We have to transfer this **binary**, the `.uf2` file, to the &mu;C for it to run. This is where the `BOOTSEL` button on the &mu;C comes into picture. Connect the &mu;C to your laptop through the USB cable while keeping the `BOOTSEL` button pressed down. This will cause the &mu;C to boot into the 'USB Storage' mode. You'll see a USB drive detected in your laptop. Now you can copy the `.uf2` file into the USB drive. As soon as the copying completes, the &mu;C reboots and starts running the code that you have just copied.

# Back
[Back to Chapter 3](../theMicrocontrollerAndCodeDevelopment.md)
