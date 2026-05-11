// add studnet form
import React, { useState } from 'react'
import axios from 'axios'

function AddStudent() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const student = { name, age }
        axios.post('http://localhost:3000/students', student)
            .then(response => {
                console.log('Student added:', response.data)
                setName('')
                setAge('')
                // Optionally, you can also update the student list here if needed
                // setStudents([...students, response.data])
            })
            .catch(error => console.error('Error adding student:', error))
    }




    return (
        <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h1 className="mb-6 border-b-3 border-blue-500 pb-4 text-center text-3xl font-bold text-gray-800">
                ➕ Add Student
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input  
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input 
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Add Student
                </button>

             

            </form>
        </div>
    )
}

export default AddStudent