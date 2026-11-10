import { useState } from "react";

const COURSES = ["MERN Stack", "Python Full Stack", "Data Analytics", "DevOps"];

export default function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState(COURSES[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    onAdd({
      _id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      course,
      isActive: true,
    });

    setName("");
    setEmail("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input placeholder="Student name" value={name} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        {COURSES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="submit">Add student</button>
    </form>
  );
}
