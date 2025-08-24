import { useEffect, useState } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s._id}>{s.name} - {s.course}</li>
        ))}
      </ul>
    </div>
  );
}
