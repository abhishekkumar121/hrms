import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const CandidateCard = ({ candidate, onEdit, onDelete, onPromote }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      {" "}
      {/* Added margin bottom for spacing */}
      <CardContent>
        <Typography variant="h5" component="div">
          {candidate.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {candidate.email}
        </Typography>
        <Typography variant="body2">
          {candidate.skills} {/* Or other relevant details */}
        </Typography>
        {/* Display resume link or other details if available */}
        {candidate.resume && (
          <Typography variant="body2">
            <a
              href={candidate.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Button size="small" onClick={() => onEdit(candidate)}>
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => onDelete(candidate._id)}
            color="error"
          >
            Delete
          </Button>
        </Box>
        {onPromote && (
          <Button
            size="small"
            onClick={() => onPromote(candidate)}
            color="primary"
          >
            Promote to Employee
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CandidateCard;
