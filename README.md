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
let hexToRgb = require('pretty-easy-hex-to-rgb');
```

or if you use TypeScript
```typescript
import hexToRgb from 'pretty-easy-hex-to-rgb'
```

The module returns a function for you to call and supply it with a HEX color value that you'd like to be tarnsformed into the corresponding rgb value.
The function returns an Array of numbers, in the order of *red color value*, *green color value* and *blue color value*.

*Side Notes:*
    * hashes are optional,
    * you can use both lowercase and UPPERCASE letters,
    * you can use both 3 or 6 character notation for the HEX value

&nbsp;

## Examples

### Valid dates
```javascript
let now = hexToRgb('f00');          //  [255, 0, 0]
let now = hexToRgb('#0F0');         //  [0, 255, 0]
let now = hexToRgb('#0000fF');      //  [0, 0, 255]
let now = hexToRgb('#ffc0cb');      //  [255, 192, 203]
let now = hexToRgb('#008080');      //  [0, 128, 128]
let now = hexToRgb('#FFE4E1');      //  [255, 228, 225]

/*
*   Note that you can, but you're not forced to, to include a 
*   hash [#] symbol in front of the HEX color value;
*   it would work either way.
*   Also, the letters are NOT case sensitive;
*   value #a00 would produce the same output as A00
*/
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