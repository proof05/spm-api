const bcrypt = require("bcrypt");
const { Teacher } = require("../../models/teacher");

const TeacherAuth = (body, res) => {
  const { email, password } = body;
  Teacher.findOne({ email: email }, (err, teacher) => {
    if (err) {
      return res.json({ msg: `Error: ${err}` });
    }
    if (teacher) {
      bcrypt.compare(password, teacher.password, (err, result) => {
        if (err) {
          return res.json({ msg: `Compare Password failed: ${err}` });
        }
        if (result) {
          return res.json({ msg: `Auth Successful` });
        } else {
          return res.json({ msg: `Password Incorrect` });
        }
      });
    } else {
      return res.json({ msg: `Email not found in database` });
    }
  });
};

module.exports = TeacherAuth;
