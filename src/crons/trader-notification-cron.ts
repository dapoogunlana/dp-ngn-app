import cron from 'node-cron';
import client from './../db/client-connection';
import fs from 'fs';

export const traderLogCron = () => {
    cron.schedule('*/50 * * * * *', () => {
        try{
            fs.readFile('src/files/racer-file/server-log3.txt', 'utf-8', (err, file) => {
                if(!err) {
                    const time = new Date().toISOString().split('T')[1].split('.')[0]
                    console.log({msg: 'file already exists', time, file});
                    return;
                }
                fs.writeFile('src/files/racer-file/server-log3.txt', 'write data to hub', (error) => {
                    if(error) {
                        console.log(error);
                        return;
                    }
                    console.log('file written');
                });
            });
        } catch(e) {
            console.log(e)
        }
    });
}
