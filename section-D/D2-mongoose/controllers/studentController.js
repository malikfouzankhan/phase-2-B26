import { Router } from "express";
import Student from "../models/Student.js";

const router = Router();

// GET /api/students  -> all students with their course title and fee
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().populate("course", "title fee").sort({ name: 1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/students/:id
router.get("/:id", async (req, res) => {
  try {
    const student = Student.findById(req.params.id).populate("course", "title fee");

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH /api/students/:id   body: any of { name, email, age, isActive }
// Must respond with the UPDATED student
router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export default router;
