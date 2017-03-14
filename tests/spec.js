"use strict";
exports.__esModule = true;
//  Dependancies
var assert = require("assert");
var index_1 = require("../lib/index");
//  Console message outputs
var isHex = 'Value provided is a valid HEX color value';
var isNotHex = 'Value provided is NOT a valid HEX color value';
//  Test - Not a string (Errors out)
describe('Value passed is not a string at all', function () {
    //  undefined
    it('should throw an error - undefined', function () {
        assert.throws(function () { return index_1["default"](); }, /Hex color code expected/);
        assert.throws(function () { return index_1["default"](undefined); }, Error);
    });
    //  null
    it('should throw an error - null', function () {
        assert.throws(function () { return index_1["default"](null); }, Error);
    });
    //  false
    it('should throw an error - false', function () {
        assert.throws(function () { return index_1["default"](false); }, Error);
    });
    //  numbers
    it('should throw an error - number', function () {
        assert.throws(function () { return index_1["default"](0); }, Error);
        assert.throws(function () { return index_1["default"](25); }, Error);
    });
    //  arrays
    it('should throw an error - array', function () {
        assert.throws(function () { return index_1["default"]([]); }, Error);
        assert.throws(function () { return index_1["default"](['some', 'random', 'values', 25, false]); }, Error);
    });
    //  Object literals
    it('should throw an error - object literal', function () {
        assert.throws(function () { return index_1["default"]({}); }, Error);
        assert.throws(function () { return index_1["default"]({ foo: 'bar', baz: 'badoom' }); }, Error);
    });
    //  function
    it('should throw an error - function', function () {
        assert.throws(function () { return index_1["default"](function () { }); }, Error);
    });
    //  Date
    it('should throw an error - instanceof Date', function () {
        assert.throws(function () { return index_1["default"](new Date()); }, Error);
    });
    //  Error
    it('should throw an error - instanceof Error', function () {
        assert.throws(function () { return index_1["default"](new Error('some error')); }, Error);
    });
});
describe('Value passed is not a valid HEX color value representation', function () {
    it('should throw an error - string but not a valid HEX color value representation', function () {
        assert.throws(function () { return index_1["default"](''); }, Error);
        assert.throws(function () { return index_1["default"]('   '); }, Error);
        assert.throws(function () { return index_1["default"]('random'); }, Error);
        assert.throws(function () { return index_1["default"]('3245'); }, Error);
        assert.throws(function () { return index_1["default"]('./]'); }, Error);
        assert.throws(function () { return index_1["default"]('#4+?]p'); }, Error);
    });
});
describe('Value passed is a valid HEX color value representation', function () {
    it('should return an array of numbers, representing RGB values', function () {
        assert.deepEqual(index_1["default"]('#e54'), [238, 85, 68]);
        assert.deepEqual(index_1["default"]('#1a50e9'), [26, 80, 233]);
        assert.deepEqual(index_1["default"]('AaE6dD'), [170, 230, 221]);
        assert.deepEqual(index_1["default"]('123'), [17, 34, 51]);
        assert.deepEqual(index_1["default"]('dcA'), [221, 204, 170]);
        assert.deepEqual(index_1["default"]('#A2B'), [170, 34, 187]);
        assert.deepEqual(index_1["default"]('451954'), [69, 25, 84]);
    });
});
