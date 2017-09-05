require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

User.find().then((user) => {
    const db = "storks-ball"
    db.users.update({"_id" :user._id("...") }, {$set : {"user.notes": "blank"}})
}).catch((err) => {
    console.log(err)
})

mongoose.connection.close();