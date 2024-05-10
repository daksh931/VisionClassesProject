import nodeMailer from 'nodemailer';

export const sendEmail = async (options)=>{

    const transporter = nodeMailer.createTransport({
        service : "gmail",
        host: "smtp.gmail.com", 
        // service : process.env.SMPT_SERVICE,
        port:587,
        secure: false,
        auth:{
            user: process.env.USER,
            pass: process.env.APP_
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
