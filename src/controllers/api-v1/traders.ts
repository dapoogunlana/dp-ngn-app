import express from 'express';
import client from './../../db/client-connection';

const router = express.Router();

router.get('/', (req, res) => {
    !client['_connected'] ? client.connect() : console.log();
    client.query(`Select * from traders`, (err, resp) => {
        if (!err) {
            res.send(resp.rows);
        } else {
            res.status(500).send({
                message: 'An errour has occoured',
                error: err.message
            });
        }
        client.end();
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    !client['_connected'] ? client.connect() : console.log();
    const inseartQuery = `Insert into traders(id, first_name, last_name, location)
        values (${req.body.id}, '${req.body.first_name}', '${req.body.last_name}', '${req.body.location}')`;
    client.query(inseartQuery, (err, resp) => {
        if (!err) {
            res.send({
                message: 'Farmer added successfully',
                status: 'Successful'
            });
        } else {
            res.status(500).send({
                status: 'Failed',
                message: err.message,
            });
        }
        client.end();
    });
});

export default router;