import nodeMailer from 'nodemailer';

export const sendEmail = async (options)=>{

    const transporter = nodeMailer.createTransport({
        
        host: "sandbox.smtp.mailtrap.io", 
        // service : process.env.SMPT_SERVICE,
        port:2525,
        auth:{
            user:process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        }
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
