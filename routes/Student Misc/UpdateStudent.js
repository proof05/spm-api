const { Student } = require("../../models/student");

const UpdateStudent = (id, body, res) => {
  Student.findOne({ _id: id }, (err, student) => {
    if (err) {
      res.json({ msg: `Error: ${err}` });
    }
    if (student) {
      student.name = body.name.toLowerCase();
      student.class = body.class.toLowerCase();
      student.age = body.age;
      student.roll = body.roll;
      student.img = body.img;
      student.email = body.email;
      student.num = body.num;
      student.address = body.address;

      student.save((err, student) => {
        if (err) {
          return res.json({ msg: `Error: ${err}` });
        }
        if (student) {
          res.json({ student });
        }
      });
    }
  });
};

module.exports = UpdateStudent;
