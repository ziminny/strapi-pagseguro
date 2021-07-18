"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AxiosService {
    /**
     * @param ConfigsPagseguro
     * @returns AxiosInstance
     */
    static api({ secreteKey, baseUrl, version }) {
        return axios_1.default.create({
            baseURL: baseUrl,
            headers: {
                Authorization: secreteKey,
                'Content-Type': 'application/json',
                'x-api-version': version
            }
        });
    }
}
exports.default = AxiosService;
