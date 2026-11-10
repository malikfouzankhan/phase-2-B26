import express from "express";
const router = express.Router();

let courses = [
      { id: 1, title: "MERN Stack", fee: 25000, duration: "6 months" },
      { id: 2, title: "Python Full Stack", fee: 22000, duration: "5 months" },
      { id: 3, title: "Data Analytics", fee: 18000, duration: "4 months" },
];
let nextId = 4;

router.get("/", (req, res) => {
      const { maxFee } = req.query;

      if (maxFee) {
            const filtered = courses.filter((c) => c.fee <= Number(maxFee));
            res.json(filtered);
      }

      res.json(courses);
});
router.get("/id", (req, res) => {
      const course = courses.find((c) => c.id === req.params.id);

      if (!course) {
            return res.status(404).json({ message: "Course not found" });
      }

      res.json(course);
});
router.post("/", (req, res) => {
      const { title, fee, duration } = req.body;

      if (!title || !fee) {
            return res
                  .status(400)
                  .json({ message: "title and fee are required" });
      }

      const course = { id: nextId++, title, fee: Number(fee), duration };
      courses.push(course);
      res.status(201).json(course);
});
router.patch("/:id", (req, res) => {
      const id = Number(req.params.id);
      const index = courses.findIndex((c) => c.id === id);

      if (index === -1) {
            return res.status(404).json({ message: "Course not found" });
      }

      courses[index] = { ...req.body, ...courses[index] };
      res.json(courses[index]);
});
router.delete("/:id", (req, res) => {
      const id = Number(req.params.id);
      const exists = courses.some((c) => c.id === id);

      if (!exists) {
            return res.status(404).json({ message: "Course not found" });
      }

      courses = courses.filter((c) => c.id !== id);
      res.json({ message: "Course deleted" });
});

export default router;
