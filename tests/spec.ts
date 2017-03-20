//  Dependancies
import { invalidValues, dataTypes as invalidDataTypes } from './invalid';
import { validHEXValues } from './valid';


//  Test - Invalid value (Returns an instance Error class)
describe('Invalid data type passed', invalidDataTypes);

//  Test - Invalid value (Returns an instance Error class)
describe('Invalid value(s) passed', invalidValues);

//  Test - Valid HEX color value (Returns an array)
describe('Valid HEX value(s) passed', validHEXValues);

