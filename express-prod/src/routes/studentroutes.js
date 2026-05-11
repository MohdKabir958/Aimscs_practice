import express from "express";
import {
  welcome,
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from "../controllers/studentControllers.js";

const router = express.Router();

router.get("/", welcome);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students", createStudent);
router.put("/students", updateStudent);
router.delete("/students/:id", deleteStudent);

export default router;