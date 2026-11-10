import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: string, required: true, trim: true },
    fee: { type: Number, required: true, min: 0 },
    duration: { type: String },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
