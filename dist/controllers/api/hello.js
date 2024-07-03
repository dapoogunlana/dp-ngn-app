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
const fetch = require('node-fetch');
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const name = (_a = req.query) === null || _a === void 0 ? void 0 : _a.visitor_name;
        const ip = `${(req.headers['x-forwarded-for'] || '')}`.split(',')[0].trim() ||
            req.socket.remoteAddress;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'visitor name is missing'
            });
        }
        const locationRes = yield fetch(`https://ipfind.co/?ip=${ip}&auth=${process.env.IPFIND_API_KEY}`);
        const location = yield locationRes.json();
        const wheaterRes = yield fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location === null || location === void 0 ? void 0 : location.longitude}&lon=${location === null || location === void 0 ? void 0 : location.longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
        const wheater = yield wheaterRes.json();
        const temp = (((_b = wheater === null || wheater === void 0 ? void 0 : wheater.main) === null || _b === void 0 ? void 0 : _b.temp) || ((_c = wheater === null || wheater === void 0 ? void 0 : wheater.main) === null || _c === void 0 ? void 0 : _c.temp) === 0) ? `${(wheater.main.temp - 273.15).toFixed(1)} degrees Celcius` : 'temporarily unavailable';
        return res.json({
            "client_ip": ip,
            "location": location === null || location === void 0 ? void 0 : location.city,
            "greeting": `Hello, ${name}!, the temperature is ${temp} in ${location === null || location === void 0 ? void 0 : location.city}`
        });
    }
    catch (e) {
        return res.status(500).json({
            success: false,
            message: e
        });
    }
}));
exports.default = router;
//# sourceMappingURL=hello.js.map