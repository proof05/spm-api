const router = require("express").Router();
const { validationResult } = require("express-validator");
const StudentValidationArray = require("./Student Misc/StudentValidationArray");
const StudentObject = require("./Student Misc/StudentObject");
const RegisterStudent = require("./Student Misc/RegisterStudent");
const AllStudents = require("./Student Misc/AllStudents");
const DeleteStudent = require("./Student Misc/DeleteStudent");
const UpdateStudent = require("./Student Misc/UpdateStudent");

// Add student
router.post("/add", StudentValidationArray, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  RegisterStudent(StudentObject(req.body), res);
});

// Get all students
router.get("/", (req, res) => {
  AllStudents(res);
});

// Delete specific student
router.delete("/:id", (req, res) => {
  DeleteStudent(req.params.id, res);
});

// Update student data
router.put("/:id", StudentValidationArray, (req, res) => {
  UpdateStudent(req.params.id, req.body, res);
});

module.exports = router;
