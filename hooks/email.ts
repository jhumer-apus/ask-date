import nodemailer from "nodemailer"

interface SendMailType {
    from: string;
    to: string;
    subject: string; 
    text: string
}

export const useEmail = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,  // Gmail address from .env
          pass: process.env.GMAIL_APP_PASSWORD,  // App Password from .env
        },
    });

    const sendMailMessage = (mailOptions: SendMailType) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error)
              return
            }
            console.log("Success")
        });
    
    }
    return {
        sendMailMessage
    }
}