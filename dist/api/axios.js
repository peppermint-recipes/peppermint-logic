"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var http = axios_1.default.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.http = http;
//# sourceMappingURL=axios.js.map