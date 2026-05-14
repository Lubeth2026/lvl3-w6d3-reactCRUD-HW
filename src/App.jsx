
import { useEffect, useState } from 'react';
import './App.css'
import { supabase } from './utils/supabase'
import StudentCard from './components/StudentCard';


function App() {
//READ from Database(table)//
   const [students, setStudents] = useState([]);
  
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

  return (
    <div>
      <h1>React CRUD W6D3</h1>
      <StudentCard students={students} />
    </div>
  )
}

export default App
