const mongoose = require("mongoose");

// Define the employees schema

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// create employes model

const Employee = mongoose.model("Employee", employeSchema);

module.exports = Employee;
