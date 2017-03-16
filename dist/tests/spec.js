"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var _1 = require(".");
//  Value passed is not a string value
describe('Value passed is not a string at all', function () {
    //  undefined
    _1.invalidHEXValue_returnError('undefined');
    _1.invalidHEXValue_returnError('undefined', undefined);
    //  null
    _1.invalidHEXValue_returnError('null', null);
    //  boolean
    _1.invalidHEXValue_returnError('boolean', false);
    _1.invalidHEXValue_returnError('boolean', true);
    //  numbers
    _1.invalidHEXValue_returnError('number', 0);
    _1.invalidHEXValue_returnError('number', 25);
    //  arrays
    _1.invalidHEXValue_returnError('array', []);
    _1.invalidHEXValue_returnError('array', ['some', 'random', 'values', 25, false]);
    //  Object literals
    _1.invalidHEXValue_returnError('object', {});
    _1.invalidHEXValue_returnError('object', { foo: 'bar', baz: 'badoom' });
    //  function
    _1.invalidHEXValue_returnError('function', function () { });
    //  Date
    _1.invalidHEXValue_returnError('instanceof Date', new Date());
    //  Error
    _1.invalidHEXValue_returnError('instanceof Error', new Error());
});
//  Value passed is an invalid hex color value representation
describe('Value passed is not a valid HEX color value representation', function () {
    //  More info
    var info = 'invalid HEX color value representation';
    //  Invalid string values
    _1.invalidHEXValue_returnError("" + info, '');
    _1.invalidHEXValue_returnError("" + info, '   ');
    _1.invalidHEXValue_returnError("" + info, 'random');
    _1.invalidHEXValue_returnError("" + info, '3245');
    _1.invalidHEXValue_returnError("" + info, './]');
    _1.invalidHEXValue_returnError("" + info, '#4+?[A.');
});
//  Test - Valid hex color value (Returns an array)
describe('Value passed is a valid HEX color value representation', function () {
    //  More info
    var infoNoHash_3 = '3 character string, no #';
    var infoHash_3 = '3 character string, with #';
    var infoNoHash_6 = '6 character string, no #';
    var infoHash_6 = '6 character string, with #';
    //  3 character, valid string representation of HEX color code
    _1.validHEXValue_returnsArray(infoNoHash_3, 'eee', [238, 238, 238]);
    _1.validHEXValue_returnsArray(infoNoHash_3, '123', [17, 34, 51]);
    _1.validHEXValue_returnsArray(infoNoHash_3, 'E4A', [238, 68, 170]);
    _1.validHEXValue_returnsArray(infoNoHash_3, 'a2c', [170, 34, 204]);
    //  3 character, valid string representation of HEX color code
    _1.validHEXValue_returnsArray(infoHash_3, 'eee', [238, 238, 238]);
    _1.validHEXValue_returnsArray(infoHash_3, '123', [17, 34, 51]);
    _1.validHEXValue_returnsArray(infoHash_3, 'E4A', [238, 68, 170]);
    _1.validHEXValue_returnsArray(infoHash_3, 'a2c', [170, 34, 204]);
    //  3 character, valid string representation of HEX color code
    _1.validHEXValue_returnsArray(infoNoHash_6, 'eeeeee', [238, 238, 238]);
    _1.validHEXValue_returnsArray(infoNoHash_6, '112233', [17, 34, 51]);
    _1.validHEXValue_returnsArray(infoNoHash_6, 'EE44AA', [238, 68, 170]);
    _1.validHEXValue_returnsArray(infoNoHash_6, 'aa22cc', [170, 34, 204]);
    //  3 character, valid string representation of HEX color code
    _1.validHEXValue_returnsArray(infoHash_6, '#eeeeee', [238, 238, 238]);
    _1.validHEXValue_returnsArray(infoHash_6, '#112233', [17, 34, 51]);
    _1.validHEXValue_returnsArray(infoHash_6, '#EE44AA', [238, 68, 170]);
    _1.validHEXValue_returnsArray(infoHash_6, '#aa22cc', [170, 34, 204]);
});
//# sourceMappingURL=spec.js.map