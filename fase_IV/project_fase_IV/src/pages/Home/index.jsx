// import { useState } from 'react'
import { useState, useEffect, Fragment } from 'react'
// import './home.css'
// export function Home() {
//   const [currentTime, updateCurrentTime] = useState(new Date().toLocaleTimeString())
//   useEffect(() => {
//     const interval = setInterval(()=>{
//       let novoValor = new Date().toLocaleTimeString()
//       updateCurrentTime(novoValor)
//     }, 1000) 

//     return () => {
//       clearInterval(interval)
//     }
//   }, [])
//   return (
//     <div className="container">
//       <div id='clock'> {currentTime} </div> 
//     </div>
//   )
// }

function Counter() {
  const [total, setTotal] = useState(0)

  const add = () => setTotal(total + 1)
  const remove = () => setTotal(total - 1)

  useEffect(() => {
    console.log("Contador Criado")
    return () => {
      console.log("Contador removido")
    }
  }, [])
  return (
    <Fragment>
      <button onClick={add}>Adicionar</button>
      <button onClick={remove}>Remover</button>
      <div>{total}</div>
    </Fragment>
  )
}



export function Home() {
  const [enabled, setEnabled] = useState(false)
  const toggleCounter = () => {
    setEnabled(!enabled)
  }
  return(
    <div className='container'>
      <button onClick={toggleCounter}>{enabled ? "Esconder o contador" : "Mostrar o contador"}</button>
      {enabled ? <Counter /> : ''}
    </div>
  )
}