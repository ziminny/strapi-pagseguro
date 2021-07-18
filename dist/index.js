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
exports.generatePayment = exports.generateKey = void 0;
const CreateKey_1 = __importDefault(require("./services/CreateKey"));
const CreatePayment_1 = __importDefault(require("./services/CreatePayment"));
/**
 * @param ConfigsPagseguro
 * @param RequestParamsPagseguro
 * @returns Promise<RequestParamsPagseguro>
 */
const generateKey = ({ secreteKey, version, baseUrl }, params) => __awaiter(void 0, void 0, void 0, function* () { return yield new CreateKey_1.default().execute({ secreteKey, version, baseUrl }, params); });
exports.generateKey = generateKey;
/**
 * @param ConfigsPagseguro
 * @param RequestParamsPagseguro
 * @returns Promise<RequestParamsPagseguro>
 */
const generatePayment = ({ secreteKey, version, baseUrl }, params) => __awaiter(void 0, void 0, void 0, function* () { return yield new CreatePayment_1.default().execute({ secreteKey, version, baseUrl }, params); });
exports.generatePayment = generatePayment;
