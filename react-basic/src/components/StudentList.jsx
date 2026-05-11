function StudentList({ students }) {
    return (
        <ul>
            {
                students.map((student) => (
                    <li key={student.id}>
                        {student.name} -  {student.age}
                    </li>
                ))
            }
        </ul>
    )
}

export default StudentList;