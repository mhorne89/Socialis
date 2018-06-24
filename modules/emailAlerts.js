// Node modules
const nodemailer = require('nodemailer');

module.exports = (message, error) => {  
  const transporter = nodemailer.createTransport(
    `smtps://${ process.env.EMAIL_ADDRESS }:${ process.env.EMAIL_PASS }@${ process.env.EMAIL_HOST }`
  );

  const emailTemplate = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: 'Error!!',
    text: `${ message } ${ JSON.stringify(error) }`,
    html: `${ message }<br><br>${ JSON.stringify(error) }`
  };
  
  transporter.sendMail(emailTemplate, (error, info) => {
    if(error) return console.log('Sent error mail', error);
  });
};