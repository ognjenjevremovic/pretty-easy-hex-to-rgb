//  Dependancies
import { validHEXValue_returnsString } from './validate';


//  HEX string - '#FF0000'
export function hexString() {
    describe('HEX String', () => {

        //  More info
        const info: string = 'from HEX string';

        validHEXValue_returnsString(info, [   0, 126, 140 ], '007E8C');
        validHEXValue_returnsString(info, [   0, 126, 140 ], '#007E8C');
        validHEXValue_returnsString(info, [   0, 126, 140 ], '007e8c');
        validHEXValue_returnsString(info, [   0, 126, 140 ], '#007e8c');

        validHEXValue_returnsString(info, [ 125, 232,  24 ], '7DE818');
        validHEXValue_returnsString(info, [ 125, 232,  24 ], '#7DE818');
        validHEXValue_returnsString(info, [ 125, 232,  24 ], '7de818');
        validHEXValue_returnsString(info, [ 125, 232,  24 ], '#7DE818');

        validHEXValue_returnsString(info, [  68,  16, 144 ], '441090');
        validHEXValue_returnsString(info, [  68,  16, 144 ], '#441090');

        validHEXValue_returnsString(info, [ 204,   0,   0 ], 'CC0000');
        validHEXValue_returnsString(info, [ 204,   0,   0 ], '#CC0000');
        validHEXValue_returnsString(info, [ 204,   0,   0 ], 'cc0000');
        validHEXValue_returnsString(info, [ 204,   0,   0 ], '#cc0000');
        validHEXValue_returnsString(info, [ 204,   0,   0 ], 'C00');
        validHEXValue_returnsString(info, [ 204,   0,   0 ], '#c00');
    });
}
