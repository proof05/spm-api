const { check } = require("express-validator");

const StudentValidationArray = [
  check("name").isString(),
  check("class").isString(),
  check("age").isDecimal(),
  check("roll").isDecimal(),
  check("img").isString(),
  check("email").isEmail(),
  check("num").isMobilePhone(),
  check("address").isString()
];

module.exports = StudentValidationArray;
