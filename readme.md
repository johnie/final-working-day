# final-working-day [![Build Status](https://travis-ci.org/johnie/final-working-day.svg?branch=master)](https://travis-ci.org/johnie/final-working-day)

> Get final working day of the month

## Install

```
$ npm install --save final-working-day
```


## Usage

```js
const finalWorkingDay = require('final-working-day');

finalWorkingDay();
//=> 2016-08-30T22:00:00.000Z - Date object

finalWorkingDay(2016, 12);
//=> 2016-12-29T23:00:00.000Z - Date object
```


## API

### finalWorkingDay(year, month)

Returns the final business working day of that month

#### year

Type: `number`
Default: `new Date().getFullYear()`

Specify a year.

#### month

Type: `number`<br>
Default: `new Date().getMonth()`

Specify a month


## License

MIT © [Johnie Hjelm](https://johnie.com)
