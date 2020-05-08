# e-stat-population

[![Build Status](https://travis-ci.org/wafuwafu13/random-multiple-integers.svg?branch=master)](https://travis-ci.org/wafuwafu13/random-multiple-integers)

This is a program for getting population data from a government statistics portal site called e-stat where you can view Japanese statistics.

## Use examples

First, install this module in your project.
```
$ npm install e-stat-population
```

Visit the [e-stat site](https://www.e-stat.go.jp/api/) and get your APP_ID

Then, change value at ``node_module/e-stat-population/index.js``

```javascript
 let APP_ID = process.env.APP_ID  // change to your APP_ID
```

Import this module in your source code and call like below.

```javascript

let eStat = require('e-stat-population')
let getData = new eStat()

getData.sumPopulation().then(data => {
    console.log(data)  // [{x: 0, y: 127094745}, ... , {x: 98, y: 64126}]
})

getData.malePopulation().then(data => {
    console.log(data)  // [{x: 0, y: 61841738}, ... , {x: 98, y: 10882}]
})

getData.femalePopulation().then(data => {
    console.log(data)  // [{x: 0, y: 65253007}, ... , {x: 98, y: 53244}]
})
```

This is the result of the 2015 census.
「x」 means age and 「y」 means population. 

# Testing

random-multiple-integers uses jest for testing. You can run test cases by installing dependencies then run "npm test" command.
```
$ npm install
$ npm test
```

# License

This software is released under the MIT License, see LICENSE.txt.

**This service uses the API function of Government Statistics Center (e-Stat), but the content of the service is not guaranteed by the country.**
