/**
 * @description
 *  Makes an rgb color value of a HEX color value
 *  and returns it in an Array like format
 *
 * @export
 * @param {string} hex
 * @returns {number[]}
 */
export function rgb(hex: string): number[] {
    //  Placeholders
    let red     : number;
    let green   : number;
    let blue    : number;

    //  Make it a valid hex color value (3 -> 6)
    if (hex.length === 3) hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;

    //  Make a rgb color value array
    red     = parseInt(hex.substring(0, 2), 16);
    green   = parseInt(hex.substring(2, 4), 16);
    blue    = parseInt(hex.substring(4, 6), 16);

    //  Not valid hex color passed
    if(isNaN(red) || isNaN(green) || isNaN(blue)) throw Error('Invalid HEX color code value supplied');


    return [ red, green, blue ];
}
