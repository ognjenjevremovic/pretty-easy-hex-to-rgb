"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var hexToRbg = require("..");
//  Should return an Array of numbers
var shouldReturnArray = 'Should return an Array of numbers, RGB color value representation ->';
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
function validHEXValue_returnsArray(info, value, equalityCheck) {
    it(shouldReturnArray + " " + info, function () {
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
        assert.deepEqual(hexToRbg(value), equalityCheck);
    });
}
exports.validHEXValue_returnsArray = validHEXValue_returnsArray;
//# sourceMappingURL=valid.js.map