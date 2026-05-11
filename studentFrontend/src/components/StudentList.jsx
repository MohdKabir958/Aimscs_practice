
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


function StudentList() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/students')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);


    const deleteStudent = (id) => {
        axios.delete(`http://localhost:3000/students/${id}`)
            .then(response => {
                console.log('Student deleted:', response.data)
                // Update the student list after deletion
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => console.error('Error deleting student:', error))
    }


    return (
        <>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
                <h1 className="mb-6 border-b-3 border-blue-500 pb-4 text-center text-3xl font-bold text-gray-800">
                    🎓 Student List
                </h1>

                <ul className="space-y-3">
                    {students.map(student => (
                        <li
                            key={student.id}
                            className="flex items-center rounded-xl bg-gray-50 px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            {/* ID Badge */}
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                                {student.id}
                            </span>

                            {/* Name */}
                            <span className="ml-4 flex-1 text-lg font-semibold text-gray-700">
                                {student.name}
                            </span>

                            {/* Age Tag */}
                            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                                Age: {student.age}
                            </span>
                            <button
                        type="button"
                        onClick={() => deleteStudent(student.id)} // Example: delete student with ID 1
                        className="w-[15%] rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 
                        focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    >
                        Delete Student
                    </button>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}

export default StudentList