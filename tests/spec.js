"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var invalid_1 = require("./invalid");
var valid_1 = require("./valid");
//  Test - Invalid value (Returns an instance Error class)
describe('Invalid data type passed', invalid_1.dataTypes);
//  Test - Invalid value (Returns an instance Error class)
describe('Invalid value(s) passed', invalid_1.invalidValues);
//  Test - Valid HEX color value (Returns an array)
describe('Valid HEX value(s) passed', valid_1.validHEXValues);
//# sourceMappingURL=spec.js.map