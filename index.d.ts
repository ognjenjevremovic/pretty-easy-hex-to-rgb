/**
 * @description
 *  Trims the string passed and checks if it's a valid HEX color value representation
 *  if it's not it will throw an Error and stop the execution
 *  else, it will make a rgb color value representation of the HEX color value passed
 *  and return the output in the Array like format
 *
 * @export
 * @param {string} hex
 * @returns {number[]}
 */
export default function hexToRgb(hex: string): number[];
