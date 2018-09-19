const express = require('express');
const router = require('express-promise-router')();
const bodyParser = require('body-parser');
const UsersController = require('../controller/user');
router.use(bodyParser.urlencoded({ extended: true }));

router.route('/users/add')
  .post(UsersController.addNewUser);

module.exports = router;