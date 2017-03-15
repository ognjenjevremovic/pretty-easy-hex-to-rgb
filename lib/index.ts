//  Dependancies
import rgb from './hex-rgb';


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
export default function hexToRgb(hex: string): number[] {

    //  Not string or empty
    if(!(typeof hex === 'string') || !hex) throw new Error('Hex color code expected');

    //  Remove the hash, if present
    hex = hex.replace(/^#/, '');

    //  Not valid string
    if(!(hex.length === 3) && !(hex.length === 6)) {
        throw new Error(`Hex color representations should be in the format of :
            => '#xxx'
                or
            => '#xxxxxx'
        `);
    }

    //  Return the array
    return rgb(hex);
}
