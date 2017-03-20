//  Dependancie
import * as assert from 'assert';
import * as hexToRgb from '../..';


//  For test purposes only
declare function hexToRgb(hexColorValue: string): string;

//  Should return an Array of numbers
const shouldReturnString: string = 'Should return an Array of Numbers representing RGB color value ->';


/**
 * @description
 *  Check if the value returns
 *  an array of number values
 *  that represent the RGB color
 *
 * @param {string} info
 * @param {string} value
 * @param {number[]} equalityCheck
 * @returns {*}
 */
export function validHEXValue_returnsString(info: string, equalityCheck: Array<number>, value: string): void {
    it(`${shouldReturnString} ${info}`, () =>  assert.deepEqual(hexToRgb(value), equalityCheck));
}
