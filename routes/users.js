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

router.post('/createWithArray', function(req, res, next) {
  let userArray = req.body;  
  userArray.forEach(arr => models.User.findOne({
      where: {
        id: arr.id
      }
    }).then((result) => {
      if(result != null) {
        res.status(409).send("ID already exists")
      }
      else {
        models.User.create({
          id: arr.id,
          username: arr.username,
          firstName: arr.firstName,
          lastName: arr.lastName,
          email: arr.email,
          password: arr.password,
          phone: arr.phone,
          userStatus: arr.userStatus,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then(() => {
          res.send('User Create Success');
        });
      }
    })
  );

  res.sendStatus(201);
});

module.exports = router;
