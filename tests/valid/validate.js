"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var hexToRgb = require("../..");
//  Should return an Array of numbers
var shouldReturnString = 'Should return an Array of Numbers representing RGB color value ->';
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
function validHEXValue_returnsString(info, equalityCheck, value) {
    it(shouldReturnString + " " + info, function () { return assert.deepEqual(hexToRgb(value), equalityCheck); });
}
exports.validHEXValue_returnsString = validHEXValue_returnsString;
//# sourceMappingURL=validate.js.map