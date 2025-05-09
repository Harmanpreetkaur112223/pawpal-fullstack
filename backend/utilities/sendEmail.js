// const nodeMailer = require('nodemailer')
import nodeMailer from 'nodemailer'

const sendEmail = async (options) =>{
    const transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:'',
            password:''
        }
    })
    const mailOptions = {
        from:'',
        to:options.email,
        subject:options.subject,
        text:options.message,

    }
    await transporter.sendMail(mailOptions)
}
export default sendEmail