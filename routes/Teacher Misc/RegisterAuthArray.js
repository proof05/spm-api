const { check } = require("express-validator");

const RegisterAuthArray = [check("email").isEmail()];

module.exports = RegisterAuthArray;
