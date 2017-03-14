//  Dependancies
import * as assert from 'assert';
import hexToRbg from '../lib/index';


//  For test purposes only
declare function hexToRbg(value?: any): any;

//  Console message outputs
const isHex     : string = 'Value provided is a valid HEX color value';
const isNotHex  : string = 'Value provided is NOT a valid HEX color value';


//  Test - Not a string (Errors out)
describe('Value passed is not a string at all', () => {
    //  undefined
    it('should throw an error - undefined', () => {
        assert.throws(() => hexToRbg(), /Hex color code expected/);
        assert.throws(() => hexToRbg(undefined), Error);
    });

    //  null
    it('should throw an error - null', () => {
        assert.throws(() => hexToRbg(null), Error);
    });

        //  false
    it('should throw an error - false', () => {
        assert.throws(() => hexToRbg(false), Error);
    });

    //  numbers
    it('should throw an error - number', () => {
        assert.throws(() => hexToRbg(0), Error);
        assert.throws(() => hexToRbg(25), Error);
    });

    //  arrays
    it('should throw an error - array', () => {
        assert.throws(() => hexToRbg([]), Error);
        assert.throws(() => hexToRbg(['some', 'random', 'values', 25, false]), Error);
    });

    //  Object literals
    it('should throw an error - object literal', () => {
        assert.throws(() => hexToRbg({}), Error);
        assert.throws(() => hexToRbg({foo: 'bar', baz: 'badoom'}), Error);
    });

    //  function
    it('should throw an error - function', () => {
        assert.throws(() => hexToRbg(() => {}), Error);
    });

    //  Date
    it('should throw an error - instanceof Date', () => {
        assert.throws(() => hexToRbg(new Date()), Error);
    });

    //  Error
    it('should throw an error - instanceof Error', () => {
        assert.throws(() => hexToRbg(new Error('some error')), Error);
    });
});

describe('Value passed is not a valid HEX color value representation', () => {
    it('should throw an error - string but not a valid HEX color value representation', () => {
        assert.throws(() => hexToRbg(''), Error);
        assert.throws(() => hexToRbg('   '), Error);
        assert.throws(() => hexToRbg('random'), Error);
        assert.throws(() => hexToRbg('3245'), Error);
        assert.throws(() => hexToRbg('./]'), Error);
        assert.throws(() => hexToRbg('#4+?]p'), Error);
    });
});

describe('Value passed is a valid HEX color value representation', () => {
    it('should return an array of numbers, representing RGB values', () => {
        assert.deepEqual(hexToRbg('#e54'), [238,85,68]);
        assert.deepEqual(hexToRbg('#1a50e9'), [26,80,233]);
        assert.deepEqual(hexToRbg('AaE6dD'), [170,230,221]);
        assert.deepEqual(hexToRbg('123'), [17,34,51]);
        assert.deepEqual(hexToRbg('dcA'), [221,204,170]);
        assert.deepEqual(hexToRbg('#A2B'), [170,34,187]);
        assert.deepEqual(hexToRbg('451954'), [69,25,84]);
    });
});
