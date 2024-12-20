const Candidate = require("../models/Candidate");

exports.createCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCandidate = await Candidate.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    await Candidate.findByIdAndDelete(id);
    res.status(200).json({ message: "Candidate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
