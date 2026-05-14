
import { useEffect, useState } from 'react';
import './App.css'
import { supabase } from './utils/supabase'
import StudentCard from './components/StudentCard';
import StudentForm from './components/StudentForm';


function App() {
//READ from Database(table)//
   const [students, setStudents] = useState([]);
//StudentForm State//
   const [formData, setFormData] = useState({ name: "", major: "", year: "",});
  
async function fetchStudents() {
  try {
    const {data, error} = await supabase.from("Directory").select("*");
    if(error){
      console.log(error);
    } else {
      console.log(data);
      setStudents(data);
    }
  } catch (error) {
    console.log(error)
  } 
}
    useEffect(()=>{
      fetchStudents();
    }, [])
//Handle Input Changes//
function handleChange(event){
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
}

  return (
    <div>
      <h1>React CRUD W6D3</h1>
      <StudentForm formData={formData} handleChange={handleChange} />
      <StudentCard students={students} />
    </div>
  )
}

export default App
