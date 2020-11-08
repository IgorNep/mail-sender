const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'your key is here',
    domain: 'your key is here',
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

//Chunk 4
const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'double-i@ukr.net',
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
//subject
//text
//from

// const mailOptions = {
//   from: 'igornesan@gmail.com',
//   to: 'double-i@ukr.net',
//   subject: 'Testing',
//   text: 'I would like to be in touch with you',
// };

// transporter.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log(data);
//   }
// });
