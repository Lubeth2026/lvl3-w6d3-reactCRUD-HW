
import React from 'react'

function StudentCard({students}) {
  return (
    <div>
      <h2>Student Directory</h2>
      {students.map((student)=>(
        <div key={student.id}>
        <h3>{student.name}</h3>
        <p>Major: {student.major}</p>
        <p>Year: {student.year}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentCard