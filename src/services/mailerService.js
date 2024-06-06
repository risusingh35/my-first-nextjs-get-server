const generateEmailTemplate =require('../templete/emailTemplate')
const MailerConfig =require('../config/mailConfig')
const GMAIL_EMAIL = process.env.GMAIL_EMAIL;

const sendEmail = (subject,to, name, message,offer) => {
    const { html, text } = generateEmailTemplate(name, message,offer);

    const mailOptions = {
        from: GMAIL_EMAIL,
        to: to,
        subject: subject,
        html: html,
        text: text,
    };

    MailerConfig.sendMail(mailOptions);
};


module.exports = {
    sendEmail,
};