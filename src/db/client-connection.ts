import { Client, Pool } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postmaster',
    database: 'resource_db',
    password: 'password'
});

client.connect();

export default client;