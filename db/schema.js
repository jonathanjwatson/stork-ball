const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dinnerChoice: String,
  registeredOn: Date,
  guest: {
    guestFullName: String,
    guestDinnerChoice: String
  }
});



userSchema.pre('save', function(next){
    now = new Date();
    this.registeredOn = now;
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = {
  User
}