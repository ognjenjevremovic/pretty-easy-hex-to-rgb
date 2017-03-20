//  Dependancie
import * as assert from 'assert';
import * as hexToRgb from '../..';


//  For test purposes only
declare function hexToRgb(hexColorValue?: any): Error;

//  Should return an Error
const shouldReturnError: string = 'Should return an instance of Error ->';


/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {*} [value]
 * @returns {*}
 */
export function invalidHEXValue_returnError(info: string, value?: any): void {
    it(`${shouldReturnError} ${info}`, () => {
        //  Does not throw an error
        assert.doesNotThrow(() => hexToRgb(value), Error);
        //  But returns an instance of Error class
        assert.deepEqual(() => hexToRgb(value), new Error('error'));
    });
}