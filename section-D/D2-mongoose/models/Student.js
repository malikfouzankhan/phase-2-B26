import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, min: 16, max: 60 },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "course" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
