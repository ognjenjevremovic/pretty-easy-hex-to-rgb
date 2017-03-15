"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var pretty_easy_data_types_1 = require("pretty-easy-data-types");
var hex_rgb_1 = require("./hex-rgb");
/**
 * @description
 *  Trims the string passed and checks if it's a valid HEX color value representation
 *  if it's not it will throw an Error and stop the execution
 *  else, it will make an rgb color value representation of the HEX color value passed
 *  and return the output in the Array like format
 *
 * @export
 * @param {string} hex
 * @returns {number[]}
 */
function hexToRgb(hex) {
    //  Not string or empty
    if (!pretty_easy_data_types_1.isString(hex) || !hex)
        throw new Error('Hex color code expected');
    //  Remove the hash, if present
    hex = hex.replace(/^#/, '');
    //  Not valid string
    if (!(hex.length === 3) && !(hex.length === 6)) {
        throw new Error("Hex color representations should be in the format of :\n            => '#xxx'\n                or\n            => '#xxxxxx'\n        ");
    }
    //  Return the array
    return hex_rgb_1.rgb(hex);
}
exports.hexToRgb = hexToRgb;
//# sourceMappingURL=checkInput.js.map