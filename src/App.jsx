import './App.css'
import {useState} from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: ''
  });

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: ''
  });

  return <h1>TOP CV</h1>
}

export default App
