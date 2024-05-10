import nodeMailer from 'nodemailer';

import {config} from "dotenv";
config({ path: "../config/config.env"}); //connection to env PORT
// export const sendEmail = async (options)=>{

    const transporter = nodeMailer.createTransport({
        
        service : "gmail",
        host: "smtp.gmail.com", 
        // service : process.env.SMPT_SERVICE,
        port:587,
        secure: false,
        auth:{
            user: process.env.USER,
            pass: 'cqxhmgvjkxvgdpzi'
        },
    });
    // console.log(options)
    const mailOptions ={
        from:{
            name : 'Vision Classes',
            address : process.env.USER
        },
        to: ['teraba8564@mfyax.com'],
        subject:'sending mail for first time',
        text:"hello node",
    }

    const sendMail = async(transporter,mailOptions)=>{
        try{
            await transporter.sendMail(mailOptions);
            console.log("mail sent!");
        }
        catch(err){
            console.error(err)
        }       
    }
    sendMail(transporter,mailOptions)
    // console.log(mailOptions)
    // await transporter.sendMail(mailOptions);
// };
