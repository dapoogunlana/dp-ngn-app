"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_connection_1 = __importDefault(require("./../../db/client-connection"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    !client_connection_1.default['_connected'] ? client_connection_1.default.connect() : console.log();
    client_connection_1.default.query(`Select * from traders`, (err, resp) => {
        if (!err) {
            res.send(resp.rows);
        }
        else {
            res.status(500).send({
                message: 'An errour has occoured',
                error: err.message
            });
        }
        client_connection_1.default.end();
    });
});
router.post('/', (req, res) => {
    console.log(req.body);
    !client_connection_1.default['_connected'] ? client_connection_1.default.connect() : console.log();
    const inseartQuery = `Insert into traders(id, first_name, last_name, location)
        values (${req.body.id}, '${req.body.first_name}', '${req.body.last_name}', '${req.body.location}')`;
    client_connection_1.default.query(inseartQuery, (err, resp) => {
        if (!err) {
            res.send({
                message: 'Farmer added successfully',
                status: 'Successful'
            });
        }
        else {
            res.status(500).send({
                status: 'Failed',
                message: err.message,
            });
        }
        client_connection_1.default.end();
    });
});
exports.default = router;
//# sourceMappingURL=traders.js.map