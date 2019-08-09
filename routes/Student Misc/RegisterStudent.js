const RegisterStudent = (StudentObject, res) => {
  StudentObject.save((err, student) => {
    if (err) {
      return res.json({ msg: `Error: ${err}` });
    }
    if (student) {
      return res.json({ student });
    }
  });
};

module.exports = RegisterStudent;
