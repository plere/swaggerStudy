var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var models = require('../models');

/* GET users listing. */
router.post('/', function(req, res, next) { //create user  
  var id = req.body.id;
  var username = req.body.username;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;  
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.phone;
  var userStatus = req.body.userStatus;  

  models.User.findOne({
    where: {
      id: id
    }
  }).then((result) => {
    if(result != null) {
      res.status(409).send("ID already exists")
    }
    else {
      models.User.create({
        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: userStatus,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then(() => {
        res.send('User Create Success');
      });
    }
  });  
});

module.exports = router;
