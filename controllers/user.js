const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = require("../models/user");



router.get("/", (req, res) => {
  User.find().then((user) => {
    res.json(user);
  });
});

router.post("/create", (req, res) => {
    console.log("Hit the API")
    const newUserInfo = req.body
    console.log(newUserInfo)
    const newUser = new User(newUserInfo);
    newUser.save()
    .then(() => {
        res.send("You did it!");
    })
    .catch(err => console.log(err));
})

router.put("/notes", (req, res) => {
  console.log("Hit the notes route")
  console.log(req.body)
  user = req.body
  User.findById(req.body._id)
  .then((user) => {
    console.log(user)
    user.notes = req.body.notes;
    console.log(user.notes);
    return user.save()
  }).then((user) => {
    console.log("Second Then statement")
    res.json(user);
  })
})




module.exports = router;