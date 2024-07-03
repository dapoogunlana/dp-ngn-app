
import * as dotenv from 'dotenv';

dotenv.config()

export default {
    PORT: parseFloat(process.env.PORT),
    PASSWORD: process.env.PASSWORD,
    USERNAME: process.env.USERNAME,
}