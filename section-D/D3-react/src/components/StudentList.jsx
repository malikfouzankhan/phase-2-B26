import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard.jsx";
import AddStudentForm from "./AddStudentForm.jsx";

const API_URL = "http://localhost:4000/api/students";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(API_URL);
        setStudents(res.data);
      } catch (err) {
        setError("Could not load students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  });

  const handleAdd = (newStudent) => {
    students.push(newStudent);
    setStudents(students);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s._id !== id));
  };

  if (loading) return <p className="info">Loading students...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section>
      <AddStudentForm onAdd={handleAdd} />

      <p className="count">Showing {students.length} students</p>

      <div className="grid">
        {students.map((s) => (
          <StudentCard
            id={s._id}
            name={s.name}
            email={s.email}
            course={s.course}
            isActive={s.isActive}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}
