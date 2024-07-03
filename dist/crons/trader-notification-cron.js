"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traderLogCron = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const fs_1 = __importDefault(require("fs"));
const traderLogCron = () => {
    node_cron_1.default.schedule('*/50 * * * * *', () => {
        try {
            fs_1.default.readFile('src/files/racer-file/server-log3.txt', 'utf-8', (err, file) => {
                if (!err) {
                    const time = new Date().toISOString().split('T')[1].split('.')[0];
                    console.log({ msg: 'file already exists', time, file });
                    return;
                }
                fs_1.default.writeFile('src/files/racer-file/server-log3.txt', 'write data to hub', (error) => {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    console.log('file written');
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    });
};
exports.traderLogCron = traderLogCron;
//# sourceMappingURL=trader-notification-cron.js.map