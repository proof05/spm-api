const { Student } = require("../../models/student");

const AllStudents = res => {
  Student.find({}, (err, students) => {
    if (err) {
      return res.json({ msg: `Error: ${err}` });
    }
    if (students) {
      return res.json({ students });
    }
  });
};

module.exports = AllStudents;
