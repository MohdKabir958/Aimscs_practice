import express from "express"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("dev"))


let students = [
    { id: 1, name: "Kabir", age: 22 },
    { id: 2, name: "Rahul", age: 23 }
];

//welcome

app.get("/", (req, res) => {
    res.send("Welocme to Student Server")
})

//GET All Students

app.get("/get-student", (req, res) => {
    res.json(students)
})

//GET Student By ID
app.get("/get-student/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)

    if (!student) {
        return res.status(404).json("student not found");
    }
    res.json(student)
})


//post 

app.post("/create-student", (req, res) => {
    const { name, age } = req.body

    if (!name || !age) {
        return res.status(400).json("student name and age is required")
    }

    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age
    }
    students.push(newStudent)

    res.status(201).json({
        message: "student created",
        data: newStudent
    })

})

//put 

app.put("/update-student", (req, res) => {
    // const id = parseInt(req.params.id)
    const { name, age, id } = req.body

    const student = students.find(s => s.id === id)

    if (!student) {
        return res.status(404).json("student not found")
    }

    student.name = name || student.name
    student.age = age || student.age

    res.status(201).json({
        message: "student updates",
        data: student
    })
})

//delete the student

app.delete("/student/:id", (req, res) => {
    const id = parseInt(req.params.id)
    students = students.filter(s => s.id !== id)

    res.json({ message: "Student deleted" });
})

// ❌ 404 Handler
app.get((req, res) => {
    return res.status(404).json({ message: "Route not found" });
});

// 🚀 Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});