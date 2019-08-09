const { Student } = require("../../models/student");

const StudentObject = body => {
  return new Student({
    name: body.name.toLowerCase(),
    class: body.class.toLowerCase(),
    age: body.age,
    roll: body.roll,
    img: body.img,
    email: body.email,
    num: body.num,
    address: body.address
  });
};

module.exports = StudentObject;
