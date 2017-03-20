"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var invalidDataTypes_1 = require("./invalidDataTypes");
var string_1 = require("./string");
//  Invalid data types
function dataTypes() {
    describe('Value passed is of invalid data type', function () {
        invalidDataTypes_1.undefinedValue();
        invalidDataTypes_1.nullValue();
        invalidDataTypes_1.booleanValue();
        invalidDataTypes_1.numberValue();
        invalidDataTypes_1.functionValue();
        invalidDataTypes_1.dateObjectValue();
        invalidDataTypes_1.errorObjectValue();
        invalidDataTypes_1.arrayValue();
        invalidDataTypes_1.objectValue();
    });
}
exports.dataTypes = dataTypes;
//  Invalid values
function invalidValues() {
    describe('Value passed is of invalid value', function () {
        string_1.invalidStringValues();
    });
}
exports.invalidValues = invalidValues;
//# sourceMappingURL=index.js.map