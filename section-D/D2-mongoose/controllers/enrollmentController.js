import { Router } from "express";
import Enrollment from "../models/Enrollment.js";

const router = Router();

// POST /api/enrollments   body: { student, course, status? }
// status is optional and should default to "active"
router.post("/", async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/enrollments/details
// -> [{ studentName, studentEmail, courseTitle, fee, status }]
router.get("/details", async (req, res) => {
  try {
    const details = await Enrollment.aggregate([
      {
        $lookup: {
          from: "Student",
          localField: "student",
          foreignField: "_id",
          as: "studentInfo",
        },
      },
      { $unwind: "$studentInfo" },
      {
        $lookup: {
          from: "courses",
          localField: "course",
          foreignField: "_id",
          as: "courseInfo",
        },
      },
      { $unwind: "$courseInfo" },
      {
        $project: {
          _id: 0,
          studentName: "$studentInfo.name",
          studentEmail: "$studentInfo.email",
          courseTitle: "$courseInfo.title",
          fee: "$courseInfo.fee",
          status: 1,
        },
      },
      { $sort: { courseTitle: 1, studentName: 1 } },
    ]);

    res.json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
