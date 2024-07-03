import express from 'express';
import env from './services/auth-services/env-service';
import bodyParser, { BodyParser } from 'body-parser';
import cors from 'cors';
import controllers from './controllers';
import { initiateCrons } from './crons';

const app = express();
const port = env.PORT;

app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', controllers);

initiateCrons();


app.listen( port, () => {
    console.log('App Running again on port ', port);
});