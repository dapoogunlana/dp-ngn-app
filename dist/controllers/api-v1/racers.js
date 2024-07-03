"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_connection_1 = __importDefault(require("./../../db/client-connection"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    // !client['_connected'] ? client.connect() : console.log();
    client_connection_1.default.query(`Select * from racers`, (err, resp) => {
        if (!err) {
            res.send({ rows: resp.rows, totalCount: resp.rowCount });
        }
        else {
            res.status(500).send({
                message: 'An errour has occoured',
                error: err.message
            });
        }
    });
});
router.get('/:id', (req, res) => {
    // !client['_connected'] ? client.connect() : console.log();
    client_connection_1.default.query(`Select * from racers where id=${req.params.id}`, (err, resp) => {
        if (!err) {
            res.send(resp.rows);
        }
        else {
            res.status(500).send({
                message: 'An errour has occoured',
                error: err.message
            });
        }
    });
});
router.post('/', (req, res) => {
    const inseartQuery = `Insert into racers(first_name, last_name, email, age)
        values ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', ${req.body.age})`;
    client_connection_1.default.query(inseartQuery, (err, resp) => {
        if (!err) {
            res.send({
                message: 'Racer added successfully',
                status: 'Successful'
            });
        }
        else {
            res.status(500).send({
                status: 'Failed',
                message: err.message,
            });
        }
    });
});
router.put('/:id', (req, res) => {
    const updateQuery = `Update racers set first_name = '${req.body.first_name}', last_name =  '${req.body.last_name}',
    email = '${req.body.email}', age = ${req.body.age} where id = ${req.params.id}`;
    client_connection_1.default.query(updateQuery, (err, resp) => {
        if (!err) {
            res.send({
                message: 'Racer updated successfully',
                status: 'Successful'
            });
        }
        else {
            res.status(500).send({
                status: 'Failed',
                message: err.message,
            });
        }
    });
});
router.delete('/:id', (req, res) => {
    const updateQuery = `Delete from racers where id = ${req.params.id}`;
    client_connection_1.default.query(updateQuery, (err, resp) => {
        if (!err) {
            res.send({
                message: 'Racer deleted successfully',
                status: 'Successful'
            });
        }
        else {
            res.status(500).send({
                status: 'Failed',
                message: err.message,
            });
        }
    });
});
router.post('/send-mail', (req, res) => {
    try {
        // sendMail({...req.body, recipients: 'md@gimpmail.com'})
        // .then(result => {
        //     if(result?.accepted &&result?.accepted.length > 0) {
        //         res.send(result);
        //     } else {
        //         res.status(400).send(result);
        //     }
        // })
        // .catch(error => {
        //     console.log({error});
        //     res.status(400).send({
        //         message: error,
        //         status: 'Failed'
        //     });
        // })
        // return;
        const inseartQuery = `Insert into racermails(title, sub_title, body, disclaimer, status)
            values ('${req.body.title}', '${req.body.subTitle}', '${req.body.body}', ${req.body.Disclaimer}, pending)`;
        client_connection_1.default.query(inseartQuery, (err, data) => {
            if (!err) {
                res.send({
                    message: 'Your mail has been saved and would be sent to all subscribers in batches',
                    status: 'Successful',
                    data
                });
            }
            else {
                res.status(500).send({
                    status: 'Failed',
                    message: err.message,
                    err
                });
            }
        });
    }
    catch (error) {
        res.status(500).send({
            status: 'Server Error',
            message: error,
        });
    }
});
exports.default = router;
//# sourceMappingURL=racers.js.map