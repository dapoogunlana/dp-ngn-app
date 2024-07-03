"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_service_1 = __importDefault(require("./services/auth-services/env-service"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const controllers_1 = __importDefault(require("./controllers"));
const crons_1 = require("./crons");
const app = (0, express_1.default)();
const port = env_service_1.default.PORT;
app.set('trust proxy', true);
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/', controllers_1.default);
(0, crons_1.initiateCrons)();
app.listen(port, () => {
    console.log('App Running again on port ', port);
});
//# sourceMappingURL=app.js.map