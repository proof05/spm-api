const bcrypt = require("bcrypt");

const RegisterTeacher = (TeacherObject, res) => {
  // Generate Password Hash
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return res.json({ msg: `Error generating salt ${err}` });
    }
    if (salt) {
      bcrypt.hash(TeacherObject.password, salt, (err, hash) => {
        if (err) {
          return res.json({ msg: `Error generating hash ${err}` });
        }
        if (hash) {
          TeacherObject.password = hash;
          // Insert into database
          TeacherObject.save((err, teacher) => {
            if (err) {
              return res.json({ msg: `Error: ${err}` });
            }
            return res.json({ teacher });
          });
        }
      });
    }
  });
};

module.exports = RegisterTeacher;
