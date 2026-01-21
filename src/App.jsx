import './App.css';
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Experience from "./components/Experience.jsx";
import Preview from "./components/Preview.jsx";
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

  return (
      <>
        <h1>TOP CV</h1>
        <General />
        <Education />
        <Experience />
        <Preview />
      </>
  )
}

export default App
