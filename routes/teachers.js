const router = require("express").Router();
const { validationResult } = require("express-validator");
const TeacherObject = require("./Teacher Misc/TeacherObject");
const TeacherValidationArray = require("./Teacher Misc/TeacherValidationArray");
const RegisterTeacher = require("./Teacher Misc/RegisterTeacher");
const RegisterAuthArray = require("./Teacher Misc/RegisterAuthArray");
const TeacherAuth = require("./Teacher Misc/TeacherAuth");

// Register Teacher
router.post("/register", TeacherValidationArray, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  RegisterTeacher(TeacherObject(req.body), res);
});

// Authentication
router.post("/auth", RegisterAuthArray, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  TeacherAuth(req.body, res);
});

module.exports = router;
