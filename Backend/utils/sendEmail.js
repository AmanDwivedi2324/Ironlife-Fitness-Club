import nodeMailer from 'nodemailer';

export const sendEmail = async(options) => {
    const transporter = nodeMailer.createTransport({
       host: process.env.SMTP_HOST,       //simple mail transfer protocol
       port: process.env.SMTP_PORT,
       service: process.env.SMTP_SERVICE,
       auth:{
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
       }
    })

    const mailOptions= {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message} \n\nEmail of user who sent the message ${options.userEmail}`
    }
    
    await transporter.sendMail(mailOptions);
}