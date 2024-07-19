---
use_math: true
---


# Number Systems
Throughout this course, we'll use three types of number systems, which are Decimal, Binary and Hexadecimal. All three systems are positional number systems. The major difference between these systems is the base or radix that is used. Let's start with the on that we've been using since childhood, i.e. Decimal.

## Decimal
The decimal number system has a base of 10 because it uses ten digits from 0 through 9. In the decimal number system, the positions successive to the left of the decimal point represent units, tens, hundreds, thousands and so on. Thus, every position shows a particular power of the base $(10)$. Consider number $2023$ as an example. The mathematical expression representing this number is 

$$\begin{equation*}
2023 = 2 \cdot 10^{3} + 0 \cdot 10^{2} + 2 \cdot 10^{1} + 2 \cdot 10^{0}
\end{equation*}$$

Note that the number $2023$ is nothing but the coefficients of increasing powers of $10$ in the equation above.
This number system is mostly used to do regular math operations in a code since majority of math nowadays uses decimal number system. However, it is always stored in binary format in a computer.

## Binary
The base of binary number system is 2 and it thus uses only two digits, 0 and 1, to write a number. Binary numbers are generally prefixed with $0b$ in C/C++ programming. Similar to decimal system, the mathematical expression representing $2023$ is

\begin{alignat*}{33}
\verb|0b0000011111100111| &= &\ &0 \cdot 2^{15} &\ &+ &\ &0 \cdot 2^{14} &\ &+ &\ &0 \cdot 2^{13} &\ &+ &\ &0 \cdot 2^{12} &\ &+ &\ &0 \cdot 2^{11} &\ &+ &\ &1 \cdot 2^{10} &\ &+ &\ &1 \cdot 2^9 &\ &+ &\ &1 \cdot 2^8 \\
                          &\ &+ &1 \cdot 2^7 &\ &+ &\ &1 \cdot 2^6 &\ &+ &\ &1 \cdot 2^5 &\ &+ &\ &0 \cdot 2^4 &\ &+ &\ &0 \cdot 2^3 &\ &+ &\ &1 \cdot 2^2 &\ &+ &\ &1 \cdot 2^1 &\ &+ &\ &1 \cdot 2^0 \\
                          &= &\ &2023
\end{alignat*}

Note that the binary number above is padded with zeros. This is done just to comply with the standard datatype sizes of 8-bit, 16-bit, 32-bit, etc. in C/C++ programming. Also note that the number of digits required, even if the padded zeros are ignored, is much higher than the decimal system.

All digital computers store information in binary number system. This is easier to implement since the two digits of this system, i.e. digit $0$ and digit $1$, can be represented by a zero voltage and a positive voltage respectively.

Take a look at following video if you were wondering how negative numbers might be represented in binary.

[![Twos Complement: Negative numbers in binary](https://img.youtube.com/vi/4qH4unVtJkE/0.jpg)](https://www.youtube.com/embed/4qH4unVtJkE)

## Hexadecimal
This number system uses a base of $16$ which require $16$ digits, $0$ through $9$ and then $A$ through $F$. Hexadecimal numbers are prefixed with $0x$ in C/C++ programming. The mathematical expression to convert $0x7E7$ into its decimal counterpart is

\begin{equation*}
\verb|0x7E7| = 7 \cdot 16^2 + E \cdot 16^1 + 7 \cdot 16^0 = 2023
\end{equation*}

Note that letter/digit $E$ above is treated as number $14$ to do the math. In fact, digits $A$ through $F$ are treated as numbers $10$ through $15$ for math's sake. Also note that the hexadecimal system is not case-sensitive, i.e. letters/digits $E$ and $e$ both mean number $14$.

The hexadecimal number system requires less number of digits than both binary and decimal system. Thus, it is generally used to define memory or register addresses, i.e. pointers in C/C++ programming language.

# Back

[Back to Chapter 2](../preliminaries.md)
