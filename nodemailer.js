const nodemailer = require('nodemailer')
const html = require("./html")
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'harish.arora@01s.in',
            pass: 'SYG007$HR'
        }
    })

var mailOptions = {
        from: '"Jone" <harish.arora@01s.in>',
        to: 'harish.arora@01s.in',
        subject: 'Welcome!Trying node mailer',
        text:"hello..i am using node mailer",
        html:html({})
      };   
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error,"error occured");
        }
        console.log('Message sent: ' + info.response);
      });