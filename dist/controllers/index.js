"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const welcome_1 = __importDefault(require("./welcome/welcome"));
const api_1 = __importDefault(require("./api"));
const api_v1_1 = __importDefault(require("./api-v1"));
const router = express_1.default.Router();
router.use('/api', api_1.default);
router.use('/api/v1', api_v1_1.default);
router.use('/', welcome_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map