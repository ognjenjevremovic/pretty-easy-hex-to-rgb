//  Dependancies
import { validHEXValue_returnsArray, invalidHEXValue_returnError } from './index';


//  Value passed is not a string value
describe('Value passed is not a string at all', () => {

    //  undefined
    invalidHEXValue_returnError('undefined');
    invalidHEXValue_returnError('undefined', undefined);

    //  null
    invalidHEXValue_returnError('null', null);

    //  boolean
    invalidHEXValue_returnError('boolean', false);
    invalidHEXValue_returnError('boolean', true);

    //  numbers
    invalidHEXValue_returnError('number', 0);
    invalidHEXValue_returnError('number', 25);

    //  arrays
    invalidHEXValue_returnError('array', []);
    invalidHEXValue_returnError('array', ['some', 'random', 'values', 25, false]);

    //  Object literals
    invalidHEXValue_returnError('object', {});
    invalidHEXValue_returnError('object', {foo: 'bar', baz: 'badoom'});

    //  function
    invalidHEXValue_returnError('function', () => {});

    //  Date
    invalidHEXValue_returnError('instanceof Date', new Date());

    //  Error
    invalidHEXValue_returnError('instanceof Error', new Error());

});

//  Value passed is an invalid hex color value representation
describe('Value passed is not a valid HEX color value representation', () => {

    //  More info
    const info: string = 'invalid HEX color value representation';

    //  Invalid string values
    invalidHEXValue_returnError(`${info}`, '');
    invalidHEXValue_returnError(`${info}`, '   ');
    invalidHEXValue_returnError(`${info}`, 'random');
    invalidHEXValue_returnError(`${info}`, '3245');
    invalidHEXValue_returnError(`${info}`, './]');
    invalidHEXValue_returnError(`${info}`, '#4+?[A.');

});

//  Test - Valid hex color value (Returns an array)
describe('Value passed is a valid HEX color value representation', () => {

    //  More info
    const infoNoHash_3  : string = '3 character string, no #';
    const infoHash_3    : string = '3 character string, with #';
    const infoNoHash_6  : string = '6 character string, no #';
    const infoHash_6    : string = '6 character string, with #';

    //  3 character, valid string representation of HEX color code
    validHEXValue_returnsArray(infoNoHash_3, 'eee', [ 238, 238, 238 ]);
    validHEXValue_returnsArray(infoNoHash_3, '123', [  17,  34,  51 ]);
    validHEXValue_returnsArray(infoNoHash_3, 'E4A', [ 238,  68, 170 ]);
    validHEXValue_returnsArray(infoNoHash_3, 'a2c', [ 170,  34, 204 ]);

    //  3 character, valid string representation of HEX color code
    validHEXValue_returnsArray(infoHash_3, 'eee', [ 238, 238, 238 ]);
    validHEXValue_returnsArray(infoHash_3, '123', [  17,  34,  51 ]);
    validHEXValue_returnsArray(infoHash_3, 'E4A', [ 238,  68, 170 ]);
    validHEXValue_returnsArray(infoHash_3, 'a2c', [ 170,  34, 204 ]);

    //  3 character, valid string representation of HEX color code
    validHEXValue_returnsArray(infoNoHash_6, 'eeeeee', [ 238, 238, 238 ]);
    validHEXValue_returnsArray(infoNoHash_6, '112233', [  17,  34,  51 ]);
    validHEXValue_returnsArray(infoNoHash_6, 'EE44AA', [ 238,  68, 170 ]);
    validHEXValue_returnsArray(infoNoHash_6, 'aa22cc', [ 170,  34, 204 ]);

    //  3 character, valid string representation of HEX color code
    validHEXValue_returnsArray(infoHash_6, '#eeeeee', [ 238, 238, 238 ]);
    validHEXValue_returnsArray(infoHash_6, '#112233', [  17,  34,  51 ]);
    validHEXValue_returnsArray(infoHash_6, '#EE44AA', [ 238,  68, 170 ]);
    validHEXValue_returnsArray(infoHash_6, '#aa22cc', [ 170,  34, 204 ]);
});
