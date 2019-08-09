const { check } = require("express-validator");

const RegistrationValidationArray = [
  check("first").isString(),
  check("last").isString(),
  check("email").isEmail(),
  check("birth").isISO8601(),
  check("gender").isString(),
  check("num").isMobilePhone(),
  check("password").isLength({ min: 8 })
];

module.exports = RegistrationValidationArray;
