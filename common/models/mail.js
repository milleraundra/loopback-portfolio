'use strict';

module.exports = function(Mail) {

  Mail.contact = function(sender, email, subject, body, cb) {
    //TODO use nodemailer to send emails to yourself
    //TODO figure out why you cant use portfolio-contact.js
    cb(null, "TADA!");
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
