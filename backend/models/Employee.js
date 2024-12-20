const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    department: { type: String },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
