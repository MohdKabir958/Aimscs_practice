// Project to connect to the backend express-prod
// and perform CRUD operations

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:3000/students";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  /* ── Fetch all students ─────────────────────────── */
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  /* ── Create a new student ───────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;

    axios
      .post(API_URL, { name, age })
      .then((res) => {
        setStudents((prev) => [...prev, res.data.data]);
        setName("");
        setAge("");
      })
      .catch((err) => console.error(err));
  };

  /* ── Delete a student by id ─────────────────────── */
  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setStudents((prev) => prev.filter((s) => s.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      {/* ── Header ──────────────────────────────────── */}
      <header className="header">
        <h1>🎓 Student Manager</h1>
        <p className="subtitle">
          {students.length} {students.length === 1 ? "student" : "students"} enrolled
        </p>
      </header>

      {/* ── Add Student Form ────────────────────────── */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input input-small"
        />
        <button type="submit" className="btn btn-add">
          + Add Student
        </button>
      </form>

      {/* ── Student List ────────────────────────────── */}
      <ul className="student-list">
        {students.length === 0 && (
          <li className="empty-state">No students yet — add one above!</li>
        )}

        {students.map((student) => (
          <li key={student.id} className="student-card">
            <div className="student-info">
              <span className="student-name">{student.name}</span>
              <span className="student-age">{student.age} years old</span>
            </div>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(student.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// how to connect frontend to backend in react and express 

// we have seen how to work with forms in react 

// SPA 
// routing 
// third party libraries like axios for making HTTP requests
