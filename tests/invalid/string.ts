//  Dependancies
import { invalidHEXValue_returnError } from './validate';


//  number argument list - (red, green, blue)
export function invalidStringValues() {
    describe('Invalid string value', () => {

        const info: string = 'from random string value';

        invalidHEXValue_returnError(info, '');
        invalidHEXValue_returnError(info, '   ');
        invalidHEXValue_returnError(info, 'hello');
        invalidHEXValue_returnError(info, '#hello');
        invalidHEXValue_returnError(info, '..\/[]');
        invalidHEXValue_returnError(info, 'error!');
    });
}
