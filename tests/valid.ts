//  Dependancie
import * as assert from 'assert';
import * as hexToRbg from '..';


//  For test purposes only
declare function hexToRbg(value?: string): number[];

//  Should return an Array of numbers
const shouldReturnArray: string = 'Should return an Array of numbers, RGB color value representation ->';


/**
 * @description
 *  Check if the value returns
 *  an array of number values
 *  that represent the RGB color
 *
 * @param {string} info
 * @param {string} value
 * @param {number[]} equalityCheck
 */
export function validHEXValue_returnsArray(info: string, value: string, equalityCheck: number[]): void {
    it(`${shouldReturnArray} ${info}`, () => {
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
    });
}
