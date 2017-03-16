"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var hexToRbg = require("..");
//  Should return an Error
var shouldReturnError = 'Should return an instance of Error ->';
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
function invalidHEXValue_returnError(info, value) {
    it(shouldReturnError + " " + info, function () {
        //  Does not throw an error
        assert.doesNotThrow(function () { return hexToRbg(); }, Error);
        assert.doesNotThrow(function () { return hexToRbg(value); }, Error);
        //  But returns an instance of Error class
        assert.deepEqual(function () { return hexToRbg(); }, new Error('error'));
        assert.deepEqual(function () { return hexToRbg(value); }, new Error('error'));
    });
}
exports.invalidHEXValue_returnError = invalidHEXValue_returnError;
//# sourceMappingURL=invalid.js.map