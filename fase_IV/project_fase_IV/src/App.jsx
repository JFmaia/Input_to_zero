// import { useState } from 'react'
import { useState } from 'react'
// react hook
import './App.css'
function App() {
  const [currentTime, updateCurrentTime] = useState('00')
  setInterval(()=>{
    let novoValor = new Date().toLocaleTimeString()
    updateCurrentTime(novoValor)
  }, 1000) 

  return (
    <div className="container">
      <div id='clock'> {currentTime} </div> 
    </div>
  )
}

export default App
