import express from "express";
import "dotenv/config";
import courseController from "./controllers/courseController.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/courses", courseController);

app.listen(PORT, () => {
  console.log(`Course API running on http://localhost:${PORT}`);
});
