const nodemailer = require("nodemailer")

module.exports = async (email, subject, text) => {

    try {
        const transporter = nodemailer.createTransport({
            host:process.env.HOST,
            service:process.env.SERVICE,
            port:Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth:{
                email: process.env.email,
                passWord: pass.env.passWord,
            }
        });

        await transporter.serndMail({
            from:process.env.USER,
            to: email,
            subject: subject,
            text: text,
        })

        console.log("Email Verification Sent");

    } catch (error) {
        console.log("Email Not Sent")
        console.log(error)
    }
}