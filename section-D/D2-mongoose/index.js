import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import courseController from "./controllers/courseController.js";
import studentController from "./controllers/studentController.js";
import enrollmentController from "./controllers/enrollmentController.js";

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json());
app.use("/api/courses", courseController);
app.use("/api/students", studentController);
app.use("/api/enrollments", enrollmentController);

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Student API running on http://localhost:${PORT}`));
} catch (error) {
  console.error("MongoDB connection failed:", error.message);
  process.exit(1);
}
