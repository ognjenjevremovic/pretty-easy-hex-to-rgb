"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  HEX string - '#FF0000'
function hexString() {
    describe('HEX String', function () {
        //  More info
        var info = 'from HEX string';
        validate_1.validHEXValue_returnsString(info, [0, 126, 140], '007E8C');
        validate_1.validHEXValue_returnsString(info, [0, 126, 140], '#007E8C');
        validate_1.validHEXValue_returnsString(info, [0, 126, 140], '007e8c');
        validate_1.validHEXValue_returnsString(info, [0, 126, 140], '#007e8c');
        validate_1.validHEXValue_returnsString(info, [125, 232, 24], '7DE818');
        validate_1.validHEXValue_returnsString(info, [125, 232, 24], '#7DE818');
        validate_1.validHEXValue_returnsString(info, [125, 232, 24], '7de818');
        validate_1.validHEXValue_returnsString(info, [125, 232, 24], '#7DE818');
        validate_1.validHEXValue_returnsString(info, [68, 16, 144], '441090');
        validate_1.validHEXValue_returnsString(info, [68, 16, 144], '#441090');
        validate_1.validHEXValue_returnsString(info, [204, 0, 0], 'CC0000');
        validate_1.validHEXValue_returnsString(info, [204, 0, 0], '#CC0000');
        validate_1.validHEXValue_returnsString(info, [204, 0, 0], 'cc0000');
        validate_1.validHEXValue_returnsString(info, [204, 0, 0], '#cc0000');
        validate_1.validHEXValue_returnsString(info, [204, 0, 0], 'C00');
        validate_1.validHEXValue_returnsString(info, [204, 0, 0], '#c00');
    });
}
exports.hexString = hexString;
//# sourceMappingURL=string.js.map