
import React from "react";
import StudentForm from "./StudentForm";

function StudentCard({ students, updateStudent, deleteStudent }) {
  return (
    <>
    <h2>Student Directory</h2>
    <div className="card">
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Major: {student.major}</p>
          <p>Year: {student.year}</p>
          <button onClick={()=> updateStudent(student)}>Edit</button>
          <button onClick={()=> deleteStudent(student.id)}>X</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default StudentCard;