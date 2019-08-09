const mongoose = require("mongoose");

const Teacher = mongoose.model(
  "Teacher",
  new mongoose.Schema({
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    birth: {
      type: Date,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  })
);

exports.Teacher = Teacher;
