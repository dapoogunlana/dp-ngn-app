
import { createTestAccount, createTransport } from 'nodemailer';
import { sampleMailGenerator } from './sample-mail-generator';

export const sendMail = async (mailObject: any) => {
    try{
        const transporter = createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true, 
            auth: {
                user: process.env.MAIL_USER2,
                pass: process.env.MAIL_PASSWORD2
            },
            tls:{
                rejectUnauthorized:false
            }
        });

        const mailInfo = {
            from: '"Sin City" contact@sin-city.io', 
            to: mailObject.recipients, 
            subject: mailObject.title, 
            text: mailObject.body, 
            html: sampleMailGenerator(mailObject),
          }

        const mailReport = await transporter.sendMail(mailInfo);
        return mailReport;
    } catch (e) {
        return e
    }

    // new Promise(async(resolve, reject) => {
    //     try{
    //         const testAccount = await createTestAccount();
    //         const testAccount = await createTestAccount();
    //         const transporter = createTransport({
    //           // host: 'smtp.ethereal.email',
    //           // port: 587, 
    //           // secure: false,
    //           // auth: {
    //           //     user: testAccount.user,
    //           //     pass: testAccount.pass
    //           // }
    //             host: "smtp.titan.email",
    //             port: 465,
    //             secure: true, 
    //             auth: {
    //                 user: process.env.MAIL_USER2,
    //                 pass: process.env.MAIL_PASSWORD2
    //             },
    //             tls:{
    //                 rejectUnauthorized:false
    //             }
    //         });
    
    //         const mailInfo = {
    //             from: '"Vanilla Network" hello@vanilla.network', 
    //             to: mailObject.recipients, 
    //             subject: mailObject.title, 
    //             text: mailObject.body, 
    //             html: sampleMailGenerator(mailObject),
    //           }
    
    //         console.log({mailReport1: 'Test'})
    //         try{
    //             const mailReport = transporter.sendMail(mailInfo);
    //             console.log({mailReport})
    //             resolve (mailReport);
    //         } catch(e) {
    //             reject(e)
    //         }
    //     } catch (e) {
    //         reject ({ success: false, message: e})
    //     }
    // });
}