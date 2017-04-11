'use strict';

module.exports = function(Mail) {

  Mail.contact = function(sender, email, subject, body, cb) {
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
