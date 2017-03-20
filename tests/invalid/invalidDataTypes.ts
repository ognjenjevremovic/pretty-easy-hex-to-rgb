//  Dependancies
import { invalidHEXValue_returnError } from './validate';


//  undefined
export function undefinedValue() {
    describe('undefined value', () => {
        invalidHEXValue_returnError('from undefined value');
        invalidHEXValue_returnError('from undefined value', undefined);
    });
}

//  null
export function nullValue() {
    describe('null value', () => {
        invalidHEXValue_returnError('from null value', null);
    });
}

//  boolean
export function booleanValue() {
    describe('boolean value', () => {
        invalidHEXValue_returnError('from boolean value', true);
        invalidHEXValue_returnError('from boolean balue', false);
    });
}

//  number
export function numberValue() {
    describe('number value', () => {
        invalidHEXValue_returnError('from number value', true);
        invalidHEXValue_returnError('from number balue', false);
    });
}

//  function
export function functionValue() {
    describe('Function', () => {
        invalidHEXValue_returnError('from function', () => { });
        invalidHEXValue_returnError('from function', () => true);
        invalidHEXValue_returnError('from function', () => 'rgb(12, 12, 50)');
    });
}

//  instance of Date class
export function dateObjectValue() {
    describe('instance of Date class', () => {
        invalidHEXValue_returnError('from date object', new Date());
    });
}

//  instance of Error class
export function errorObjectValue() {
    describe('instance of Error class', () => {
        invalidHEXValue_returnError('from error object', new Error('invalid value'));
    });
}

//  Array
export function arrayValue() {
    describe('Array', () => {
        invalidHEXValue_returnError('from Array', []);
        invalidHEXValue_returnError('from Array', ['#f00']);
        invalidHEXValue_returnError('from Array', ['A7C', '#65C455']);
    });
}

//  Object
export function objectValue() {
    describe('Object', () => {
        invalidHEXValue_returnError('from Object', { });
        invalidHEXValue_returnError('from Object', { red: 'ff', green:  0, blue:   0 });
        invalidHEXValue_returnError('from Object', { red:   45, green: 79, blue: 'CC'});
    });
}
