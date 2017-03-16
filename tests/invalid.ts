//  Dependancie
import * as assert from 'assert';
import * as hexToRbg from '..';


//  For test purposes only
declare function hexToRbg(value?: any): Error;

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
        assert.doesNotThrow(() => hexToRbg(), Error);
        assert.doesNotThrow(() => hexToRbg(value), Error);
        //  But returns an instance of Error class
        assert.deepEqual(() => hexToRbg(), new Error('error'));
        assert.deepEqual(() => hexToRbg(value), new Error('error'));
    });
}