let students = [
  { id: 1, name: "Kabir", age: 22 },
  { id: 2, name: "Rahul", age: 23 }
];

// Welcome
export const welcome = (req, res) => {
  res.send("Welcome to Student Server");
};

// GET all students
export const getStudents = (req, res) => {
  res.json(students);
};

// GET student by ID
export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json("student not found");
  }

  res.json(student);
};

// CREATE student
export const createStudent = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json("student name and age is required");
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    message: "student created",
    data: newStudent
  });
};

// UPDATE student
export const updateStudent = (req, res) => {
  const { name, age, id } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json("student not found");
  }

  student.name = name || student.name;
  student.age = age || student.age;

  res.json({
    message: "student updated",
    data: student
  });
};

// DELETE student
export const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(s => s.id !== id);

  res.json({ message: "Student deleted" });
};