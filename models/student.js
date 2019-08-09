const mongoose = require("mongoose");

let Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    roll: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  })
);

exports.Student = Student;
