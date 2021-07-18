"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var AxiosService = /** @class */ (function () {
    function AxiosService() {
    }
    AxiosService.api = function (_a) {
        var secreteKey = _a.secreteKey, _b = _a.baseUrl, baseUrl = _b === void 0 ? 'https://sandbox.api.pagseguro.com/' : _b, _c = _a.version, version = _c === void 0 ? '4.0' : _c;
        return axios_1.default.create({
            baseURL: baseUrl,
            headers: {
                Authorization: secreteKey,
                'Content-Type': 'application/json',
                'x-api-version': version
            }
        });
    };
    return AxiosService;
}());
exports.default = AxiosService;
