# Hello World!
This section explains how the software installed so far can be used to compile a code for the microcontroller. Instructions are given for [MacOS](helloWorld.md#macos) and [Windows/Linux](helloWorld.md#windowslinux).

## MacOS
- Create a folder with any name you like on the desktop.
- Follow the images below to open it in VSCode. The name of the folder in my case is `testCode`.

### Step 1
![1](./figs/mac/openFolderInVSCode/1.png)
### Step 2
![2](./figs/mac/openFolderInVSCode/2.png)
### Step 3
![3](./figs/mac/openFolderInVSCode/3.png)
### Step 4
![4](./figs/mac/openFolderInVSCode/4.png)
### Step 5
![5](./figs/mac/openFolderInVSCode/5.png)
### Step 6
![6](./figs/mac/openFolderInVSCode/6.png)
### Step 7
![7](./figs/mac/openFolderInVSCode/7.png)
  
- Follow the steps for [compiling the code](helloWorld.md#compile-code).

## Windows/Linux
- Create a folder with any name you like on the desktop.
- Follow the images below to open it in VSCode. The name of the folder in my case is `testCode`.

### Step 1
![1](./figs/windows/openFolderInVSCode/1.png)
### Step 2
![2](./figs/windows/openFolderInVSCode/2.png)
### Step 3
![3](./figs/windows/openFolderInVSCode/3.png)
### Step 4
![4](./figs/windows/openFolderInVSCode/4.png)

- Press <kbd>⌃&#160;Control</kbd> + <kbd>⇧&#160;Shift</kbd> + <kbd>P</kbd> to open the command palette in VSCode and follow the steps shown in the images below to reopen the folder in WSL. Thus, you'll have access to the 'Arm Toolchain' and 'CMake' from VSCode.

  ### Step 1
  ![1](./figs/windows/reopenInWSL/1.png)
  ### Step 2
  ![2](./figs/windows/reopenInWSL/2.png)
  ### Step 3
  ![3](./figs/windows/reopenInWSL/3.png)
  ### Step 4
  ![4](./figs/windows/reopenInWSL/4.png)

- Follow the steps for [compiling the code](./helloWorld.md#compile-code).


## Compile Code
The steps are independent of the operating system from here on.
- Create three files with names `helloWorld.c`, `pico_sdk_import.cmake` and `CMakeLists.txt`. Make sure to create these files with correct case, i.e. upper or lower. Following images show steps for creating a file through VSCode.

### Step 1
![1](./figs/compileCode/createFiles/1.png)
### Step 2
![2](./figs/compileCode/createFiles/2.png)
### Step 3
![3](./figs/compileCode/createFiles/3.png)
### Step 4
![4](./figs/compileCode/createFiles/4.png)

- Copy following in `helloWorld.c` file and save it. You can use <kbd>⌃&#160;Control</kbd> + <kbd>S</kbd> (Windows) or <kbd>⌘&#160;Command</kbd> + <kbd>S</kbd> (MacOS) to save a file.
    ```c++
    #include <stdio.h>
    #include <pico/stdlib.h>

    #define LED_PIN 25

    bool pinState = true;

    int main()
    {
        stdio_init_all();

        gpio_init(LED_PIN);
        gpio_set_dir(LED_PIN, true);
        gpio_put(LED_PIN, pinState);

        while (true)
        {
            pinState = !pinState;
            gpio_put(LED_PIN, pinState);
            printf("Hello World!\r\n");
            sleep_ms(1000);
        }
    }
    ```
- Copy following in `pico_sdk_import.cmake` file and save it.
    ```cmake
    # This is a copy of <PICO_SDK_PATH>/external/pico_sdk_import.cmake

    # This can be dropped into an external project to help locate this SDK
    # It should be include()ed prior to project()

    if (DEFINED ENV{PICO_SDK_PATH} AND (NOT PICO_SDK_PATH))
        set(PICO_SDK_PATH $ENV{PICO_SDK_PATH})
        message("Using PICO_SDK_PATH from environment ('${PICO_SDK_PATH}')")
    endif ()

    if (DEFINED ENV{PICO_SDK_FETCH_FROM_GIT} AND (NOT PICO_SDK_FETCH_FROM_GIT))
        set(PICO_SDK_FETCH_FROM_GIT $ENV{PICO_SDK_FETCH_FROM_GIT})
        message("Using PICO_SDK_FETCH_FROM_GIT from environment ('${PICO_SDK_FETCH_FROM_GIT}')")
    endif ()

    if (DEFINED ENV{PICO_SDK_FETCH_FROM_GIT_PATH} AND (NOT PICO_SDK_FETCH_FROM_GIT_PATH))
        set(PICO_SDK_FETCH_FROM_GIT_PATH $ENV{PICO_SDK_FETCH_FROM_GIT_PATH})
        message("Using PICO_SDK_FETCH_FROM_GIT_PATH from environment ('${PICO_SDK_FETCH_FROM_GIT_PATH}')")
    endif ()

    set(PICO_SDK_PATH "${PICO_SDK_PATH}" CACHE PATH "Path to the Raspberry Pi Pico SDK")
    set(PICO_SDK_FETCH_FROM_GIT "${PICO_SDK_FETCH_FROM_GIT}" CACHE BOOL "Set to ON to fetch copy of SDK from git if not otherwise locatable")
    set(PICO_SDK_FETCH_FROM_GIT_PATH "${PICO_SDK_FETCH_FROM_GIT_PATH}" CACHE FILEPATH "location to download SDK")

    if (NOT PICO_SDK_PATH)
        if (PICO_SDK_FETCH_FROM_GIT)
            include(FetchContent)
            set(FETCHCONTENT_BASE_DIR_SAVE ${FETCHCONTENT_BASE_DIR})
            if (PICO_SDK_FETCH_FROM_GIT_PATH)
                get_filename_component(FETCHCONTENT_BASE_DIR "${PICO_SDK_FETCH_FROM_GIT_PATH}" REALPATH BASE_DIR "${CMAKE_SOURCE_DIR}")
            endif ()
            # GIT_SUBMODULES_RECURSE was added in 3.17
            if (${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.17.0")
                FetchContent_Declare(
                        pico_sdk
                        GIT_REPOSITORY https://github.com/raspberrypi/pico-sdk
                        GIT_TAG master
                        GIT_SUBMODULES_RECURSE FALSE
                )
            else ()
                FetchContent_Declare(
                        pico_sdk
                        GIT_REPOSITORY https://github.com/raspberrypi/pico-sdk
                        GIT_TAG master
                )
            endif ()

            if (NOT pico_sdk)
                message("Downloading Raspberry Pi Pico SDK")
                FetchContent_Populate(pico_sdk)
                set(PICO_SDK_PATH ${pico_sdk_SOURCE_DIR})
            endif ()
            set(FETCHCONTENT_BASE_DIR ${FETCHCONTENT_BASE_DIR_SAVE})
        else ()
            message(FATAL_ERROR
                    "SDK location was not specified. Please set PICO_SDK_PATH or set PICO_SDK_FETCH_FROM_GIT to on to fetch from git."
                    )
        endif ()
    endif ()

    get_filename_component(PICO_SDK_PATH "${PICO_SDK_PATH}" REALPATH BASE_DIR "${CMAKE_BINARY_DIR}")
    if (NOT EXISTS ${PICO_SDK_PATH})
        message(FATAL_ERROR "Directory '${PICO_SDK_PATH}' not found")
    endif ()

    set(PICO_SDK_INIT_CMAKE_FILE ${PICO_SDK_PATH}/pico_sdk_init.cmake)
    if (NOT EXISTS ${PICO_SDK_INIT_CMAKE_FILE})
        message(FATAL_ERROR "Directory '${PICO_SDK_PATH}' does not appear to contain the Raspberry Pi Pico SDK")
    endif ()

    set(PICO_SDK_PATH ${PICO_SDK_PATH} CACHE PATH "Path to the Raspberry Pi Pico SDK" FORCE)

    include(${PICO_SDK_INIT_CMAKE_FILE})
    ```
- Copy following in `CMakeLists.txt` file and save it.
    ```cmake
    cmake_minimum_required(VERSION 3.13)
    set(ENV{PICO_SDK_PATH} "~/pico/pico-sdk/")
    include(pico_sdk_import.cmake)
    project(helloWorld C CXX ASM)

    set(CMAKE_C_STANDARD 11)
    set(CMAKE_CXX_STANDARD 17)
    pico_sdk_init()

    add_executable(helloWorld
        helloWorld.c
    )

    pico_enable_stdio_usb(helloWorld 1)
    pico_enable_stdio_uart(helloWorld 0)

    pico_add_extra_outputs(helloWorld)
    target_link_libraries(helloWorld pico_stdlib)
    ```
- Press <kbd>⌃&#160;Control</kbd> + <kbd>⇧&#160;Shift</kbd> + <kbd>P</kbd> (Windows) or <kbd>⌘&#160;Command</kbd> + <kbd>⇧&#160;Shift</kbd> + <kbd>P</kbd> (MacOS) to open the command palette in VSCode. Follow the steps shown in the images below to configure CMake for this folder.

### Step 1
![1](./figs/compileCode/configureCMake/1.png)
### Step 2
![2](./figs/compileCode/configureCMake/2.png)
### Step 3
![3](./figs/compileCode/configureCMake/3.png)
### Step 4
![4](./figs/compileCode/configureCMake/4.png)

- You will see a <kbd>&#x2699;&#160;Build</kbd> button at the bottom strip and a folder named 'build' once CMake is configured correctly. You can click on the <kbd>&#x2699;&#160;Build</kbd> button to compile the `.c` code. After building completes, the 'build' folder will contain a `.uf2` file if the `.c` code is compiled properly.

### Step 1
![1](./figs/compileCode/buildCode/1.png)
### Step 2
![2](./figs/compileCode/buildCode/2.png)
### Step 3
![3](./figs/compileCode/buildCode/3.png)

- First code compilation done!!!
## Next

- [Chapter 1](../../chap01/summaryOfBasicCCppProgramming.md)

## Back

- [Raspberry Pi C/C++ SDK](../sec03/piPicoSDK.md)
