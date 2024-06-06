const nodemailer = require("nodemailer");
require("dotenv").config();
const YAHOO_EMAIL = process.env.YAHOO_EMAIL;
const YAHOO_PASSWORD = process.env.YAHOO_PASSWORD;
const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const yahooConfig = {
    host: 'smtp.mail.yahoo.com',
    port: 465, // Use port 465 for SMTP over SSL/TLS
    secure: true, // true for 465, false for other ports
    auth: {
        user: YAHOO_EMAIL,
        pass: YAHOO_PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3',
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
    }
};

const gmailConfig={
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: GMAIL_EMAIL,
      pass: GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  }
const MailerConfig = function () {
  const transporter = nodemailer.createTransport(gmailConfig);
  // Function to send mail
  const sendMail = function (mailOptions) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });
  };

  //   Function to verify transporter
  const verifyTransporter = function () {
    transporter.verify((error, success) => {
      if (error) {
        console.error("Error setting up GMAIL SMTP transporter:", error);
      } else {
        console.log("GMAIL SMTP transporter is ready to send emails");
      }
    });
  };

  return {
    sendMail: sendMail,
    verifyTransporter: verifyTransporter,
  };
};

module.exports = MailerConfig();
