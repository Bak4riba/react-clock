import React, {useState} from 'react'
import './styles.css'
export default function Clock(){

  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [horas, setHoras] = useState(0)
function hora(){
  var data = new Date();
  var seg     = data.getSeconds();
  var hora    = data.getHours();          
  var min     = data.getMinutes();
  setSegundos(seg)
  setMinutos(min)
  setHoras(hora)
}
setInterval(() => {
  hora()
}, 100)
 
  return(
    <div className="div-container">
      <div className="div-clock">
        <div className="text-clock"><p>{horas}:{minutos}:{segundos}</p></div>
      </div>
    </div>
  ) 
}
