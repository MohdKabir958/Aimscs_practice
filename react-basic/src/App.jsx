// import { useState } from "react"


// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You Click {count} times</p>

//       <button
//         onClick={() => { setCount(count + 1) }}
//       >Count : {count}</button>
//       <p>Your Counter Value is {count}</p>
//     </div>
//   )
// }
// export default App


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3000";

const StudentManager = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [loading, setLoading] = useState(false);

  // 1. Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API_URL}/get-student`);
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students", err);
    }
  };

  useEffect(() => { 
    fetchStudents(); 
  }, []);

  // 2. Create Student
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age) return alert("Fill all fields");
    
    try {
      await axios.post(`${API_URL}/create-student`, formData);
      setFormData({ name: '', age: '' });
      fetchStudents(); // Refresh list
    } catch (err) {
      alert("Error creating student");
    }
  };

  // 3. Delete Student
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/student/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Student Registry</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded shadow-sm bg-gray-50">
        <div className="flex gap-4 mb-4">
          <input 
            type="text" placeholder="Name" className="p-2 border rounded w-full"
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="number" placeholder="Age" className="p-2 border rounded w-full"
            value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Student
        </button>
      </form>

      {/* List Section */}
      <div className="space-y-3">
        {students.map(student => (
          <div key={student.id} className="flex justify-between items-center p-4 border-b">
            <div>
              <p className="font-semibold text-lg">{student.name}</p>
              <p className="text-gray-500">Age: {student.age}</p>
            </div>
            <button 
              onClick={() => deleteStudent(student.id)}
              className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentManager;