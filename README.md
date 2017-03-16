# pretty-easy-hex-to-rgb
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Tests][tests-image]][travis-url]

### *What is pretty-easy-hex-to-rgb?*
***pretty-easy-hex-to-rgb*** *is a simple NodeJS module for converting a HEX color value to it's corresponding rgb value*.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-hex-to-rgb
```

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
let hexToRGB = require('pretty-easy-hex-to-rgb');
```
&nbsp;

or if you use TypeScript
```typescript
import hexToRGB from 'pretty-easy-hex-to-rgb'
```
&nbsp;

The module returns a function for you to call and supply it with a HEX color value that you'd like to be transformed into the corresponding rgb value.
The function returns an Array of numbers, in the order of *red color value*, *green color value* and *blue color value* or an instance of Error class if the invalid HEX color representation was passed.
&nbsp;

***Important:***
 * hashes are optional (both *'#f00'* and *'f00'* will produce the same output),
 * you can use both _lowercase_ and _UPPERCASE_ letters (*'F00'* and *'f00'* will produce the same output),
 * you can use both 3 and 6 character notation for the HEX value (*'FF0000'* and *'F00'* will produce the same output).

&nbsp;

## Examples

### Convert HEX color to RGB color
```javascript
hexToRGB('f00');          //  [255, 0, 0]
hexToRGB('#0F0');         //  [0, 255, 0]
hexToRGB('#0000fF');      //  [0, 0, 255]
hexToRGB('#ffc0cb');      //  [255, 192, 203]
hexToRGB('#008080');      //  [0, 128, 128]
hexToRGB('#FFE4E1');      //  [255, 228, 225]

/*
*   Note that you can, but you're not forced to, to include a 
*   hash [#] symbol in front of the HEX color value;
*   it would work either way.
*   Also, the letters are NOT case sensitive;
*   value #a00 would produce the same output as A00
*/
```

&nbsp;

### Consider the following
```javascript
/*
*   Since 1.2.0, the module will return an instance of an Error class,
*   instead of throwing an error and terminating the process
*   making it more dynamic and usable for production
*   where you depend on the user input,
*   if argument passed is not a valid HEX color value.
*
*   Because of this change, I advise you to 
*   consider including a utility library,
*   to check the output data type, such as
*             pretty-easy-data-types
*
*   https://www.npmjs.com/package/pretty-easy-data-types
*/
const { 
    isArray,        //  check for instance of Array class
    isError         //  check for instance of Error class
} = require('pretty-easy-data-types');
const hexToRGB  = require('pretty-easy-hex-to-rgb');


//  You can pass any value/data type to a function
const rgbColorValue = hexToRGB('#f00');

//  Check if the value returned is an instance of an Array class
//  if it is, make a valid rgb css property color value out of it
//  else it is an instance of an Error class
const rgbOutput = isArray(rgbColorValue) ?
    `rgb(${rgbColorValue.join('')})` :
    rgbColorValue;
if(isError(rgbOutput)) console.log(`Invalid HEX color value passed: ${rgbOutput.message}`);
```

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-hex-to-rgb) repository!

### Found a bug?
Please open a an [issue](https://github.com/ognjenjevremovic/pretty-easy-hex-to-rgb/issues).

### License
Copyright (c) 2017 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-hex-to-rgb/blob/master/LICENSE) License.

[npm-image]: https://img.shields.io/npm/v/pretty-easy-hex-to-rgb.svg
[npm-url]: https://npmjs.org/package/pretty-easy-hex-to-rgb
[travis-image]: https://img.shields.io/travis/ognjenjevremovic/pretty-easy-hex-to-rgb/master.svg
[travis-url]: https://travis-ci.org/ognjenjevremovic/pretty-easy-hex-to-rgb
[tests-image]: https://img.shields.io/badge/test-passing-green.svg