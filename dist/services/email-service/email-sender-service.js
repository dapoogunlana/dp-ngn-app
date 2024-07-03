"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = require("nodemailer");
const sample_mail_generator_1 = require("./sample-mail-generator");
const sendMail = (mailObject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = (0, nodemailer_1.createTransport)({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER2,
                pass: process.env.MAIL_PASSWORD2
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailInfo = {
            from: '"Sin City" contact@sin-city.io',
            to: mailObject.recipients,
            subject: mailObject.title,
            text: mailObject.body,
            html: (0, sample_mail_generator_1.sampleMailGenerator)(mailObject),
        };
        const mailReport = yield transporter.sendMail(mailInfo);
        return mailReport;
    }
    catch (e) {
        return e;
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
});
exports.sendMail = sendMail;
//# sourceMappingURL=email-sender-service.js.map