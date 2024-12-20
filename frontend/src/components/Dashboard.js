// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Button, Box, Tabs, Tab, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import CandidateList from "./CandidateList";
// import CandidateForm from "./CandidateForm";
// import EmployeeList from "./EmployeeList"; // You'll need to create this
// import EmployeeForm from "./EmployeeForm"; // You'll need to create this
// import LeaveList from "./LeaveList";
// import LeaveForm from "./LeaveForm";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// const Dashboard = () => {
//   const { logout, user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [tabValue, setTabValue] = useState(0);
//   const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false);
//   const [editingCandidate, setEditingCandidate] = useState(null);
//   const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
//   const [editingLeave, setEditingLeave] = useState(null);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleLogout = async () => {
//     try {
//       await api.post("/auth/logout");
//       logout();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   const handleOpenCandidateModal = () => {
//     setIsCandidateModalOpen(true);
//     setEditingCandidate(null);
//   };

//   const handleCloseCandidateModal = () => {
//     setIsCandidateModalOpen(false);
//     setEditingCandidate(null);
//   };

//   const handleCandidateFormSubmit = async (formData) => {
//     try {
//       if (editingCandidate) {
//         // make put request
//         await api.put(`/candidates/${editingCandidate._id}`, formData);
//         console.log("updating data", formData);
//       } else {
//         // make post request
//         await api.post("/candidates", formData);
//         console.log("adding data", formData);
//       }
//       handleCloseCandidateModal();
//     } catch (error) {
//       console.error("Error saving candidate:", error);
//       // Handle error
//     }
//   };

//   const handleEditCandidate = (candidate) => {
//     setEditingCandidate(candidate);
//     setIsCandidateModalOpen(true);
//   };

//   const handleOpenEmployeeModal = () => {
//     setIsEmployeeModalOpen(true);
//     setEditingEmployee(null);
//   };

//   const handleCloseEmployeeModal = () => {
//     setIsEmployeeModalOpen(false);
//     setEditingEmployee(null);
//   };

//   const handleEmployeeFormSubmit = async (formData) => {
//     try {
//       if (editingEmployee) {
//         // make put request
//         console.log("updating data", formData);
//       } else {
//         // make post request
//         console.log("adding data", formData);
//       }
//       handleCloseEmployeeModal();
//     } catch (error) {
//       console.error("Error saving Employee:", error);
//       // Handle error
//     }
//   };

//   const handleEditEmployee = (employee) => {
//     setEditingEmployee(employee);
//     setIsEmployeeModalOpen(true);
//   };

//   const handleOpenLeaveModal = () => {
//     setIsLeaveModalOpen(true);
//     setEditingLeave(null);
//   };

//   const handleCloseLeaveModal = () => {
//     setIsLeaveModalOpen(false);
//     setEditingLeave(null);
//   };

//   const handleLeaveFormSubmit = async (formData) => {
//     try {
//       if (editingLeave) {
//         // make put request
//         console.log("updating data", formData);
//       } else {
//         // make post request
//         console.log("adding data", formData);
//       }
//       handleCloseLeaveModal();
//     } catch (error) {
//       console.error("Error saving Leave:", error);
//       // Handle error
//     }
//   };

//   const handleEditLeave = (leave) => {
//     setEditingLeave(leave);
//     setIsLeaveModalOpen(true);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box
//         sx={{
//           borderBottom: 1,
//           borderColor: "divider",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           p: 2,
//         }}
//       >
//         <Typography variant="h4">Dashboard</Typography>
//         <Button onClick={handleLogout}>Logout</Button>
//       </Box>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={tabValue}
//           onChange={handleTabChange}
//           aria-label="basic tabs example"
//         >
//           <Tab
//             label="Candidates"
//             id={`simple-tab-0`}
//             aria-controls={`simple-tabpanel-0`}
//           />
//           <Tab
//             label="Employees"
//             id={`simple-tab-1`}
//             aria-controls={`simple-tabpanel-1`}
//           />
//           <Tab
//             label="Leaves"
//             id={`simple-tab-2`}
//             aria-controls={`simple-tabpanel-2`}
//           />
//         </Tabs>
//       </Box>
//       <TabPanel value={tabValue} index={0}>
//         <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
//           <Button onClick={handleOpenCandidateModal}>Add Candidate</Button>
//         </Box>
//         <CandidateList onEdit={handleEditCandidate} onPromote={() => {}} />
//         <CandidateForm
//           open={isCandidateModalOpen}
//           onClose={handleCloseCandidateModal}
//           onSubmit={handleCandidateFormSubmit}
//           candidate={editingCandidate}
//         />
//       </TabPanel>
//       <TabPanel value={tabValue} index={1}>
//         <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
//           <Button onClick={handleOpenEmployeeModal}>Add Employee</Button>
//         </Box>
//         <EmployeeList onEdit={handleEditEmployee} />
//         <EmployeeForm
//           open={isEmployeeModalOpen}
//           onClose={handleCloseEmployeeModal}
//           onSubmit={handleEmployeeFormSubmit}
//           employee={editingEmployee}
//         />
//       </TabPanel>
//       <TabPanel value={tabValue} index={2}>
//         <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
//           <Button onClick={handleOpenLeaveModal}>Add Leave</Button>
//         </Box>
//         <LeaveList onEdit={handleEditLeave} />
//         <LeaveForm
//           open={isLeaveModalOpen}
//           onClose={handleCloseLeaveModal}
//           onSubmit={handleLeaveFormSubmit}
//           leave={editingLeave}
//         />
//       </TabPanel>
//     </Box>
//   );
// };

// export default Dashboard;
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Box, Tabs, Tab, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import CandidateList from "./CandidateList";
import CandidateForm from "./CandidateForm";
import EmployeeList from "./EmployeeList"; // You'll need to create this
import EmployeeForm from "./EmployeeForm"; // You'll need to create this
import LeaveList from "./LeaveList";
import LeaveForm from "./LeaveForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Dashboard = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [editingLeave, setEditingLeave] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleOpenCandidateModal = () => {
    setIsCandidateModalOpen(true);
    setEditingCandidate(null);
  };

  const handleCloseCandidateModal = () => {
    setIsCandidateModalOpen(false);
    setEditingCandidate(null);
  };

  const handleCandidateFormSubmit = async (formData) => {
    try {
      if (editingCandidate) {
        // make put request
        await api.put(`/candidates/${editingCandidate._id}`, formData);
        console.log("updating data", formData);
      } else {
        // make post request
        await api.post("/candidates", formData);
        console.log("adding data", formData);
      }
      handleCloseCandidateModal();
    } catch (error) {
      console.error("Error saving candidate:", error);
      // Handle error
    }
  };

  const handleEditCandidate = (candidate) => {
    setEditingCandidate(candidate);
    setIsCandidateModalOpen(true);
  };

  const handleOpenEmployeeModal = () => {
    setIsEmployeeModalOpen(true);
    setEditingEmployee(null);
  };

  const handleCloseEmployeeModal = () => {
    setIsEmployeeModalOpen(false);
    setEditingEmployee(null);
  };

  const handleEmployeeFormSubmit = async (formData) => {
    try {
      if (editingEmployee) {
        // make put request
        console.log("updating data", formData);
      } else {
        // make post request
        console.log("adding data", formData);
      }
      handleCloseEmployeeModal();
    } catch (error) {
      console.error("Error saving Employee:", error);
      // Handle error
    }
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsEmployeeModalOpen(true);
  };

  const handleOpenLeaveModal = () => {
    setIsLeaveModalOpen(true);
    setEditingLeave(null);
  };

  const handleCloseLeaveModal = () => {
    setIsLeaveModalOpen(false);
    setEditingLeave(null);
  };

  const handleLeaveFormSubmit = async (formData) => {
    try {
      if (editingLeave) {
        // make put request
        console.log("updating data", formData);
      } else {
        // make post request
        console.log("adding data", formData);
      }
      handleCloseLeaveModal();
    } catch (error) {
      console.error("Error saving Leave:", error);
      // Handle error
    }
  };

  const handleEditLeave = (leave) => {
    setEditingLeave(leave);
    setIsLeaveModalOpen(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h4">Dashboard</Typography>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Candidates"
            id={`simple-tab-0`}
            aria-controls={`simple-tabpanel-0`}
          />
          <Tab
            label="Employees"
            id={`simple-tab-1`}
            aria-controls={`simple-tabpanel-1`}
          />
          <Tab
            label="Leaves"
            id={`simple-tab-2`}
            aria-controls={`simple-tabpanel-2`}
          />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button onClick={handleOpenCandidateModal}>Add Candidate</Button>
        </Box>
        <CandidateList onEdit={handleEditCandidate} onPromote={() => {}} />
        <CandidateForm
          open={isCandidateModalOpen}
          onClose={handleCloseCandidateModal}
          onSubmit={handleCandidateFormSubmit}
          candidate={editingCandidate}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button onClick={handleOpenEmployeeModal}>Add Employee</Button>
        </Box>
        <EmployeeList onEdit={handleEditEmployee} />
        <EmployeeForm
          open={isEmployeeModalOpen}
          onClose={handleCloseEmployeeModal}
          onSubmit={handleEmployeeFormSubmit}
          employee={editingEmployee}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button onClick={handleOpenLeaveModal}>Add Leave</Button>
        </Box>
        <LeaveList onEdit={handleEditLeave} />
        <LeaveForm
          open={isLeaveModalOpen}
          onClose={handleCloseLeaveModal}
          onSubmit={handleLeaveFormSubmit}
          leave={editingLeave}
        />
      </TabPanel>
    </Box>
  );
};

export default Dashboard;
