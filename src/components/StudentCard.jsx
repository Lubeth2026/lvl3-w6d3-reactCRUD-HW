
import React from "react";
import StudentForm from "./StudentForm";

function StudentCard({ students }) {
  return (
    <>
    <h2>Student Directory</h2>
    <div className="card">
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Major: {student.major}</p>
          <p>Year: {student.year}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default StudentCard;