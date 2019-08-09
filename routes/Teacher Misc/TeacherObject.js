const { Teacher } = require("../../models/teacher");

const TeacherObject = body => {
  return new Teacher({
    first: body.first.toLowerCase(),
    last: body.last.toLowerCase(),
    email: body.email.toLowerCase(),
    birth: body.birth,
    gender: body.gender.toLowerCase(),
    num: body.num,
    password: body.password
  });
};

module.exports = TeacherObject;
