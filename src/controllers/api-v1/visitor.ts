import { Router } from 'express';
import client from '../../db/client-connection';

const router = Router();

router.get('create-table', (req, res) => {
    console.log('lulon')
    const query = `
        CREATE TABLE users (
            email varchar,
            firstName varchar,
            lastName varchar,
            age int
        );
    `;
    try{
        client.query(query, (err, data) => {
            if(!err) {
                return res.status(400).send({
                    success: false,
                    message: 'Could not create table',
                    error: err,
                })
            } else {
                return res.send({
                    success: true,
                    message: 'Table created successfully',
                    data,
                })
            }
        })
    }catch(e){
        console.log('Wahala')
        return res.status(500).send({
            success: false,
            message: 'Error while creating table',
            error: e,
        })
    }
});

export default router