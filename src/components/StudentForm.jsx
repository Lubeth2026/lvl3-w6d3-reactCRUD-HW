
import React from 'react'

function StudentForm({ formData, handleChange, addStudent }) {
  return (
    <div>
        <form onSubmit={addStudent}>
            <label htmlFor="name">Name:
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            </label>
            <label htmlFor="major">Major:
            <input type="text" name="major" id="major" value={formData.major} onChange={handleChange} />
            </label>
            <label htmlFor="year">Year: 
            <input type="text" name="year" id="year" value={formData.year} onChange={handleChange}/>
            </label>
            <button type="submit">Add Student</button>
        </form>
    </div>
  )
}

export default StudentForm