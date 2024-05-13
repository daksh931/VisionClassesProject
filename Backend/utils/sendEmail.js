import nodeMailer from 'nodemailer';
import { config } from 'dotenv';
config({ path: "../config/config.env"}); //connection to env PORT

//https://www.youtube.com/watch?v=QDIOBsMBEI0 video helped out 

export const sendEmail = async (options)=>{

    const transporter = nodeMailer.createTransport({
        service : "gmail",
        host: "smtp.gmail.com", 
        // service : process.env.SMPT_SERVICE,
        port:587,
        secure: false,
        auth:{
            user: process.env.USER,
            pass: process.env.APP_PASSWORD
        },
    })
    // console.log(options)
    const mailOptions ={
        from:'vision support <support@vision.com>',
        to: options.email,
        subject:options.subject,
        text:options.message,
    }
    // console.log(mailOptions)
    await transporter.sendMail(mailOptions);
};
