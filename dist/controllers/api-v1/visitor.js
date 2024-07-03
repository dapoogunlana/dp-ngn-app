"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_connection_1 = __importDefault(require("../../db/client-connection"));
const router = (0, express_1.Router)();
router.get('create-table', (req, res) => {
    console.log('lulon');
    const query = `
        CREATE TABLE users (
            email varchar,
            firstName varchar,
            lastName varchar,
            age int
        );
    `;
    try {
        client_connection_1.default.query(query, (err, data) => {
            if (!err) {
                return res.status(400).send({
                    success: false,
                    message: 'Could not create table',
                    error: err,
                });
            }
            else {
                return res.send({
                    success: true,
                    message: 'Table created successfully',
                    data,
                });
            }
        });
    }
    catch (e) {
        console.log('Wahala');
        return res.status(500).send({
            success: false,
            message: 'Error while creating table',
            error: e,
        });
    }
});
exports.default = router;
//# sourceMappingURL=visitor.js.map