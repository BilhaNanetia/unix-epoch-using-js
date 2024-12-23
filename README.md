# Calculate seconds elapsed since January 1, 1970
## Overview
This project provides a simple JavaScript function to calculate the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC, also known as the Unix epoch, up to the current moment.The Unix epoch is the reference point for calculating the number of seconds that have elapsed since midnight Coordinated Universal Time (UTC) on January 1, 1970.This calculation uses JavaScript's `Date.now()` method.
## Features
* Calculates the time elapsed since the Unix epoch in seconds.
* Outputs an integer value representing the total seconds elapsed since January 1, 1970.
## Prerequisites
* A Javascript runtime environment like Node.js
* Knowledge of JavaScript
* Git
## Installation
To run the script in a Node.js environment:
1. Clone the repository:
``` console
git clone https://github.com/BilhaNanetia/unix-epoch-using-js.git
cd unix-epoch-using-js
```
2. In the terminal, run the command:
``` console 
node elapsedSeconds.js
```
## How it works
1. **Timestamp Calculations**:
* `Date.now()` retrieves the current timestamp in milliseconds since the Unix epoch.
2. **Conversion to seconds**:
* Dividing the timestamp by 1000 converts it to seconds
3. **Integer Precision**:
* `Math.floor()` rounds the result down to the nearest integer to ensure precision and prevent fractional seconds.
4. **Logging the Result**:
- The calculated seconds are output to the console using `console.log`which displays the result in the terminal.

