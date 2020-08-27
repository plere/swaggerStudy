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

router.post('/createWithList', function(req, res, next) {
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

router.get('/login', function(req, res, next) {
  let username = req.query.username;
  let pwd = req.query.password;

  models.User.findOne({
    where: {
      username: username,
      password: pwd
    }    
  }).then(result => {
    if(result == null) {
      res.sendStatus(400);
    }
    else {
      res.send("login");
    }
  });
});

router.get('/logout', function(req, res, next) {
  //action logout
  res.send('respond with a resource');
});

router.get('/:username', function(req, res, next) {
  let username = req.params.username;
  models.User.findOne({
    where: {
      username: username
    }
  }).then(result => {
    if(result == null)
      res.sendStatus(400);
    else {
      res.json({
        id: result.id,
        username: result.username,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        password: result.password,
        phone: result.phone,
        userStatus: result.userStatus
      });
    }
  });  
});

router.put('/:username', function(req, res, next) {
  let username = req.params.username;
  models.User.findOne({
    where: {
      username: username
    }
  }).then(result => {
    if(result == null)
      res.sendStatus(400);
    else {
      models.User.update({
        id: req.body.id,
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        userStatus: req.body.userStatus
      }, {
        where: {
          username: username
        }
      }).then(() => {
        res.send("user update");
      });
    }
  });  
});

router.delete('/:username', function(req, res, next) {
  let username = req.params.username;
  models.User.findOne({
    where: {
      username: username
    }
  }).then(result => {
    if(result == null)
      res.sendStatus(400);
    else {
      models.User.destroy({
        where: {
          username: username
        }
      }).then(() => {
        res.send("user delete");
      });      
    }
  });  
});


module.exports = router;
