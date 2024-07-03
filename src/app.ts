import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import controllers from './controllers';
import { initiateCrons } from './crons';
import * as dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', controllers);

initiateCrons();


app.listen( port, () => {
    console.log('App Running on port ', port);
});