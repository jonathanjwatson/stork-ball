const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const nodemailer = require('nodemailer');

//**********************************//
//      SAY HELLO WITH NODEMAILER   //
//**********************************//

router.post('/', (req, res) => {
    console.log("Hit the nodemailer route");
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_EMAIL, // Your email id
            pass: process.env.GMAIL_PASSWORD // Your password
        }
    });
    // var text = `Hello world from \n\n + ${req.body.name}`;
    var name = `${req.body.fullName}`
    var email = `${req.body.email}`
    var phone = `${req.body.phone}`
    var dinnerChoice = `${req.body.dinnerChoice}`
    var guestName = `${req.body.guest.guestFullName}`
    var guestDinnerChoice = `${req.body.guest.guestDinnerChoice}`
    var text = "Hello world from me!";
    var mailOptions = {
        from: process.env.GMAIL_EMAIL, // sender address
        to: 'lairs@savethestorks.com, madison@savethestorks.com, morgan.melendez@savethestorks.com', // list of receivers
        subject: `New Stork Ball Registration`, // Subject line
        // text: text, //, // plaintext body
        html: `<b>Name:</b>${name}<br /><b>Email: </b> ${email}<br /><b>Phone: </b>${phone}<br /><b>Dinner Choice: </b><br /><b>Guest Name: </b>${guestName}<br /><b>Guest Dinner Choice: </b>${guestDinnerChoice} (If Guest Name is null, ignore dinner choice).` // You can choose to send an HTML body instead
      };
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
      });
}); // handle the route at yourdomain.com/sayHello

module.exports = router;