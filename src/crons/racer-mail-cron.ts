import { schedule } from 'node-cron';
import client from '../db/client-connection';

let running = false;

export const mailCron = () => {
    schedule('*/5 * * * * *', () => {
        if(running) {
            console.log('Already runing');
            return;
        }
        running = true;
        console.log('Now runing');
        !client['_connected'] ? client.connect() : console.log();
        client.query(`Select * from racers Where first_name='Freeman'`, (err, data) => {
            if(!err) {
                // console.log({data: data.rows});
                let intCount = 1;
                const inti = setInterval(() => {
                    intCount += 1;
                    console.log({intCount});
                }, 1000);
                setTimeout(() => {
                    clearInterval(inti);
                    console.log('Cleared')
                    running = false;
                }, 6000);
            } else{
                console.log({err});
                running = false;
            }
        })
    });
}
