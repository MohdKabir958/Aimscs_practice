const students = [
    {id:1,name:"Alice",age:20},
    {id:2,name:"Bob",age:22},
]


export const getStudents = (req,res)=>{
    res.send(students)
}

export const getStudentById = (req,res)=>{
    const id = parseInt(req.params.id)
    const student = students.find(s=>s.id === id)   
    if(student){
        res.send(student)
    }else{
        res.status(404).json({message:"Student not found"})
    }
}

export const welcome =(req,res)=>{
    res.send(students)
}

export const addStudent = (req,res)=>{
    const {name,age} = req.body
    const newStudent = {
        id: students.length + 1,
        name,
        age
    }
    students.push(newStudent)
    res.status(201).json({  
        message:"Student added successfully",
        data: newStudent
    })
}