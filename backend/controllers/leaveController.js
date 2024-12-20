const Leave = require("../models/Leave");

exports.createLeave = async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLeave = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLeave = await Leave.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedLeave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const mongoose = require("mongoose");

exports.deleteLeave = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid leave ID" });
    }

    // Attempt to delete the leave record
    const deletedLeave = await Leave.findByIdAndDelete(id);

    if (!deletedLeave) {
      return res.status(404).json({ message: "Leave record not found" });
    }

    res.status(200).json({ message: "Leave record deleted successfully" });
  } catch (error) {
    console.error("Error deleting leave record:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};
