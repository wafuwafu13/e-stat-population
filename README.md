# e-stat

[![Build Status](https://travis-ci.org/wafuwafu13/random-multiple-integers.svg?branch=master)](https://travis-ci.org/wafuwafu13/random-multiple-integers)

This is a program for getting population data from a government statistics portal site called e-stat where you can view Japanese statistics.## Use examples

First, install this module in your project.
```
$ npm install e-stat
```
Import this module in your source code and call like below.

```javascript

let e-stat = require('e-stat')
let getData = new e-stat()

getData.sumpopulation().then(data => {
    console.log(data)  // [{x: 0, y: 127094745}, ... , {x: 98, y: 64126}]
})
```

