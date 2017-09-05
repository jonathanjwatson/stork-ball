const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = require("../models/user");
const json2csv = require('json2csv');




var MongoClient = require('mongodb').MongoClient, assert = require('assert');
router.get('/csv', function (req, res) {
  console.log("Hit the CSV route");
    // var url = 'mongodb://admin:detroit123@ds063946.mlab.com:63946/misale_dev';
    
    //
    // This function should be used for migrating a db table to a TBD format
    //
    var migrateMongoDBTable = function(db, callback) {
        // Get the documents collection
        console.log("Reading database records");
        // Get the documents collection
        var collection = db.collection('users');
        console.log(collection)
        // Find some documents
        //collection.find({'a': 3}).toArray(function(err, docs) {
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log(docs)
          //console.log(docs);
          //console.log('docs.length ---> ', docs.length);
          console.log('Creating CSV...');
          //console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=');
          var json2csv = require('json2csv');
          var fields = ['_id', 'JobID', 'LastApplied'];
          var fieldNames = ['ID_OR_PK', 'JOB_UNIQUE_ID_TITLE', 'APPLICATION_DATE'];
          var data = json2csv({ data: docs, fields: fields, fieldNames: fieldNames });
          //console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=');
          // EXPORT FILE
          res.attachment('yourfilenamehere.csv');
          res.status(200).send(data);
          callback(docs);
        });
    }
  });

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