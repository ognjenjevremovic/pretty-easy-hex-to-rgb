"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  number argument list - (red, green, blue)
function invalidStringValues() {
    describe('Invalid string value', function () {
        var info = 'from random string value';
        validate_1.invalidHEXValue_returnError(info, '');
        validate_1.invalidHEXValue_returnError(info, '   ');
        validate_1.invalidHEXValue_returnError(info, 'hello');
        validate_1.invalidHEXValue_returnError(info, '#hello');
        validate_1.invalidHEXValue_returnError(info, '..\/[]');
        validate_1.invalidHEXValue_returnError(info, 'error!');
    });
}
exports.invalidStringValues = invalidStringValues;
//# sourceMappingURL=string.js.map