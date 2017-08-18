require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));

const userOne = new User({
    fullName: "Jonathan Watson",
    email: "jonathanwatson1@gmail.com",
    phone: "757-447-7332",
    dinnerChoice: "Beef",
    registeredOn: '',
    guest: {
        guestFullName: null,
        guestDinnerChoice: "Chicken"
      }
})

userOne.save().then(() => console.log("User One Saved!"));

mongoose.connection.close();