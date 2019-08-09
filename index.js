const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/database");

// JSON
app.use(express.json());
// Port
const port = 5000;
app.listen(port, () => console.log(`Port: ${port}`));

// Database Connection
mongoose.connect(db.dburl, { useNewUrlParser: true });
mongoose.connection.on("connected", () =>
  console.log(`Connected on: ${db.dburl}`)
);
mongoose.connection.on("error", err =>
  console.log(`Database connection error: ${err}`)
);

// Routes
// Teacher Route
const teacher = require("./routes/teachers");
app.use("/teacher", teacher);
// Student Route
const student = require("./routes/students");
app.use("/student", student);
