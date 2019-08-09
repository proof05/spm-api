const { Student } = require("../../models/student");

const DeleteStudent = (id, res) => {
  Student.findOneAndDelete(id, (err, doc) => {
    if (err) {
      return res.json({ msg: `Failed to delete document: ${err}` });
    }
    if (doc) {
      return res.json({ doc });
    }
  });
};

module.exports = DeleteStudent;
