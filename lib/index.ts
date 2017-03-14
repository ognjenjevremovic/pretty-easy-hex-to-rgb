//  Make it rgb
function rgb(hex: string): number[] {
    let red     : number;
    let green   : number;
    let blue    : number;

    //  Make it a valid hex color value (6)
    if (hex.length === 3) hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;

    red     = parseInt(hex.substring(0, 2), 16);
    green   = parseInt(hex.substring(2, 4), 16);
    blue    = parseInt(hex.substring(4, 6), 16);

    //  Not valid
    if(isNaN(red) || isNaN(green) || isNaN(blue)) throw Error('Invalid HEX color code value supplied');

    return [ red, green, blue ];
}

//  Module entry point
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
