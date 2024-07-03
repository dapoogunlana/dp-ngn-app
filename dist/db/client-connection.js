"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    user: 'postmaster',
    database: 'resource_db',
    password: 'password'
});
client.connect();
exports.default = client;
//# sourceMappingURL=client-connection.js.map