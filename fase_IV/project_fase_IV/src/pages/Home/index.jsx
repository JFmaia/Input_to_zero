// import { useState } from 'react'
import { useState, useEffect } from 'react'
import './home.css'
export function Home() {
  const [currentTime, updateCurrentTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const interval = setInterval(()=>{
      let novoValor = new Date().toLocaleTimeString()
      updateCurrentTime(novoValor)
    }, 1000) 

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="container">
      <div id='clock'> {currentTime} </div> 
    </div>
  )
}