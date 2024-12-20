import React, { useState } from "react";
import CandidateList from "./CandidateList";
import CandidateForm from "./CandidateForm";
import { Button } from "@mui/material";

const CandidatesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setEditingCandidate(null); // Set to null when adding a new candidate
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCandidate(null);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingCandidate) {
        // make put request
        console.log("updating data", formData);
      } else {
        // make post request
        console.log("adding data", formData);
      }
      // Make API call to save the candidate (either POST or PUT)
      handleCloseModal();
    } catch (error) {
      console.error("Error saving candidate:", error);
      // Handle error
    }
  };

  const handleEdit = (candidate) => {
    setEditingCandidate(candidate);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Add Candidate</Button>
      <CandidateList onEdit={handleEdit} />
      <CandidateForm
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        candidate={editingCandidate} // Pass the candidate being edited
      />
    </div>
  );
};

export default CandidatesPage;
