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
const express_1 = __importDefault(require("express"));
const index_1 = require("./index");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const configs = {
        secreteKey: '9530D7E5F2974BDFA479B75C9E8CC2D5'
    };
    const generateKeyResponse = yield index_1.generateKey(Object.assign({}, configs), req.body);
    const generatePaymentResponse = yield index_1.generatePayment(Object.assign({}, configs), generateKeyResponse);
    return res.json(generatePaymentResponse);
}));
app.listen(4500, () => {
    console.log('Server Up');
});
