"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeek = exports.updateWeek = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("./api/axios");
var updateWeek = function (week) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.http.put('/week', week)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
exports.updateWeek = updateWeek;
var getWeek = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.http.get('/week')];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
exports.getWeek = getWeek;
//# sourceMappingURL=weekService.js.map