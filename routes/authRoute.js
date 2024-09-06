const express = require('express');

const {login, register} = require('../controllers/authController');
// tạo router để điều hướng trang được tích hợp sẵn trong express
const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);

module.exports = Router;
