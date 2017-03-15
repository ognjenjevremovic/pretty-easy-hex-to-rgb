"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
var hexToRbg = require("..");
//  Test - Not a string (Errors out)
describe('Value passed is not a string at all', function () {
    //  undefined
    it('should throw an error - undefined', function () {
        assert.throws(function () { return hexToRbg(); }, /Hex color code expected/);
        assert.throws(function () { return hexToRbg(undefined); }, Error);
    });
    //  null
    it('should throw an error - null', function () {
        assert.throws(function () { return hexToRbg(null); }, Error);
    });
    //  false
    it('should throw an error - false', function () {
        assert.throws(function () { return hexToRbg(false); }, Error);
    });
    //  numbers
    it('should throw an error - number', function () {
        assert.throws(function () { return hexToRbg(0); }, Error);
        assert.throws(function () { return hexToRbg(25); }, Error);
    });
    //  arrays
    it('should throw an error - array', function () {
        assert.throws(function () { return hexToRbg([]); }, Error);
        assert.throws(function () { return hexToRbg(['some', 'random', 'values', 25, false]); }, Error);
    });
    //  Object literals
    it('should throw an error - object literal', function () {
        assert.throws(function () { return hexToRbg({}); }, Error);
        assert.throws(function () { return hexToRbg({ foo: 'bar', baz: 'badoom' }); }, Error);
    });
    //  function
    it('should throw an error - function', function () {
        assert.throws(function () { return hexToRbg(function () { }); }, Error);
    });
    //  Date
    it('should throw an error - instanceof Date', function () {
        assert.throws(function () { return hexToRbg(new Date()); }, Error);
    });
    //  Error
    it('should throw an error - instanceof Error', function () {
        assert.throws(function () { return hexToRbg(new Error('some error')); }, Error);
    });
});
//  Test - Invalid hex color value (Errors out)
describe('Value passed is not a valid HEX color value representation', function () {
    it('should throw an error - string but not a valid HEX color value representation', function () {
        assert.throws(function () { return hexToRbg(''); }, Error);
        assert.throws(function () { return hexToRbg('   '); }, Error);
        assert.throws(function () { return hexToRbg('random'); }, Error);
        assert.throws(function () { return hexToRbg('3245'); }, Error);
        assert.throws(function () { return hexToRbg('./]'); }, Error);
        assert.throws(function () { return hexToRbg('#4+?]p'); }, Error);
    });
});
//  Test - Valid hex color value (Returns an array)
describe('Value passed is a valid HEX color value representation', function () {
    it('should return an array of numbers, representing RGB values', function () {
        assert.deepEqual(hexToRbg('#e54'), [238, 85, 68]);
        assert.deepEqual(hexToRbg('#1a50e9'), [26, 80, 233]);
        assert.deepEqual(hexToRbg('AaE6dD'), [170, 230, 221]);
        assert.deepEqual(hexToRbg('123'), [17, 34, 51]);
        assert.deepEqual(hexToRbg('dcA'), [221, 204, 170]);
        assert.deepEqual(hexToRbg('#A2B'), [170, 34, 187]);
        assert.deepEqual(hexToRbg('451954'), [69, 25, 84]);
    });
});
//# sourceMappingURL=spec.js.map