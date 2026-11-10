import { Router } from "express";
import Course from "../models/Course.js";

const router = Router();

// GET /api/courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().sort({ title: 1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
