import React,{useState} from 'react'
import Clock from './components/clock'/* 
import {hora} from './components/clock' */
import Message from './components/message'

function App() {
  const data = new Date()
  const hora= data.getHours()
  const [horas, setHoras] = useState(hora)
  setInterval(() => {
    setHoras(hora)
  }, 1000);
  const bgdefault = (horas >= 18 || horas <= 5) ? "bg-night" : "bg-day"
  

  return (
    <div  className={`div-main  ${bgdefault}`}>
      <Clock/>
      {/* <Message time={`${bgdefault}`}/> */}
    </div>
  );
}

export default App;
