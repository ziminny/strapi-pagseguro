"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AxiosService_1 = __importDefault(require("./AxiosService"));
class CreateKey {
    constructor() { }
    /**
     * @param ConfigsPagseguro
     * @param RequestParamsPagseguro
     * @returns Promise<RequestParamsPagseguro>
     */
    execute({ secreteKey, version = '4.0', baseUrl = 'https://sandbox.api.pagseguro.com/', }, params) {
        return __awaiter(this, void 0, void 0, function* () {
            this.secreteKey = secreteKey;
            this.version = version;
            this.baseUrl = baseUrl;
            try {
                const api = AxiosService_1.default.api({ baseUrl, secreteKey, version });
                const response = yield api.post('charges', Object.assign({}, params));
                const repaseParam = params;
                repaseParam.payment_method.card = {
                    security_code: params.payment_method.card.security_code,
                    id: response.data.payment_method.card.id
                };
                return repaseParam;
            }
            catch (error) {
                return error.response.data.error_messages;
            }
        });
    }
}
exports.default = CreateKey;
