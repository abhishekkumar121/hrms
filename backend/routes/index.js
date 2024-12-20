const express = require("express");
const jwtValidationMiddleware = require("../middlewares/jwtValidationMiddleware");
const authController = require("../controllers/authController");
const candidateController = require("../controllers/candidateController");
const employeeController = require("../controllers/employeeController");
const attendanceController = require("../controllers/attendanceController");
const leaveController = require("../controllers/leaveController");

// Authentication Routes
const authRouter = express.Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/logout", jwtValidationMiddleware, authController.logout);

// Candidate Routes
const candidateRouter = express.Router();
candidateRouter.use(jwtValidationMiddleware);
candidateRouter.post("/", candidateController.createCandidate);
candidateRouter.get("/", candidateController.getCandidates);
candidateRouter.put("/:id", candidateController.updateCandidate);
candidateRouter.delete("/:id", candidateController.deleteCandidate);

// Employee Routes
const employeeRouter = express.Router();
employeeRouter.use(jwtValidationMiddleware);
employeeRouter.post("/", employeeController.createEmployee);
employeeRouter.get("/", employeeController.getEmployees);
employeeRouter.put("/:id", employeeController.updateEmployee);
employeeRouter.delete("/:id", employeeController.deleteEmployee);

// Attendance Routes
const attendanceRouter = express.Router();
attendanceRouter.use(jwtValidationMiddleware);
attendanceRouter.post("/", attendanceController.createAttendance);
attendanceRouter.get("/", attendanceController.getAttendance);
attendanceRouter.put("/:id", attendanceController.updateAttendance);
attendanceRouter.delete("/:id", attendanceController.deleteAttendance);

// Leave Routes
const leaveRouter = express.Router();
leaveRouter.use(jwtValidationMiddleware);
leaveRouter.post("/", leaveController.createLeave);
leaveRouter.get("/", leaveController.getLeaves);
leaveRouter.put("/:id", leaveController.updateLeave);
leaveRouter.delete("/:id", leaveController.deleteLeave);

module.exports = {
  authRouter,
  candidateRouter,
  employeeRouter,
  attendanceRouter,
  leaveRouter,
};
