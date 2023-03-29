# Utility Functions
This is a collection of utility functions that can be used in various JavaScript projects. Below is a brief description of each function.
## Installation
you can install the package using:
```js
npm i utils-core.js
```
in the code:
```js
const tools = require('utils-core.js')
```
## StringToMs
This function converts a time string to milliseconds. It takes a string as an input and returns the time in milliseconds. If the input string is invalid, it throws an error.
```js
const timeString = '5h';
const timeInMs = tools.time.StringToMs(timeString); //output: 18000000
```
## MsToString
This function converts a number of milliseconds to a human-readable time string. It takes the number of milliseconds as an input and returns a string that represents the time in years, months, days, hours, minutes, and seconds. It also accepts an optional separator argument to separate the time units.
```js
const milliseconds = 5000000;
const timeString = tools.time.MsToString(milliseconds, ', '); //output: '1h, 23m, 20s'
```
## theNextDayOn
This function returns the milliseconds timestamp of the next day. It takes an optional dayOffset argument to calculate the timestamp for a specific number of days in the future.
```js
const nextDayTimestamp = tools.time.theNextDayOn(1); //output: the time of the first second of the next day
```
## abbrev
This function abbreviates a large number with a letter suffix. It takes a number or a string as an input and returns a string representing the abbreviated number.
```js
const largeNumber = 1500000;
const abbreviatedString = tools.format.abbrev(largeNumber); //output: '1.5M'
```