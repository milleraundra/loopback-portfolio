'use strict';

let nodemailer = require('nodemailer');

module.exports = function(Mail) {

  Mail.contact = function(sender, email, subject, body, cb) {
    let transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    });

    transporter.sendMail({
      from: email,
      to: 'miller.aundra@gmail.com',
      subject: subject,
      text: body
    }, (err, info) => {
      (err) ? cb(err, null) : cb(null, info);
  });

  };

  Mail.remoteMethod('contact', {
    accepts: [
      {arg: 'sender', type: 'string'},
      {arg: 'email', type: 'string'},
      {arg: 'subject', type: 'string'},
      {arg: 'body', type: 'string'}
    ],
    returns: {arg: 'greeting', type: 'string'}

  });


};
