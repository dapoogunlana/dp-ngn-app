"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailCron = void 0;
const node_cron_1 = require("node-cron");
const client_connection_1 = __importDefault(require("../db/client-connection"));
let running = false;
const mailCron = () => {
    (0, node_cron_1.schedule)('*/5 * * * * *', () => {
        if (running) {
            console.log('Already runing');
            return;
        }
        running = true;
        console.log('Now runing');
        !client_connection_1.default['_connected'] ? client_connection_1.default.connect() : console.log();
        client_connection_1.default.query(`Select * from racers Where first_name='Freeman'`, (err, data) => {
            if (!err) {
                // console.log({data: data.rows});
                let intCount = 1;
                const inti = setInterval(() => {
                    intCount += 1;
                    console.log({ intCount });
                }, 1000);
                setTimeout(() => {
                    clearInterval(inti);
                    console.log('Cleared');
                    running = false;
                }, 6000);
            }
            else {
                console.log({ err });
                running = false;
            }
        });
    });
};
exports.mailCron = mailCron;
//# sourceMappingURL=racer-mail-cron.js.map