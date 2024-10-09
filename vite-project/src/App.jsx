import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('blue')

  const colorRed = ()=>{
     setColor('red')
  }
  const colorGreen = ()=>{
    setColor('green')
 }
 const colorYellow = ()=>{
  setColor('yellow')
}
  return (
    
    <div style={{backgroundColor: color, height: "100vh"}}>
    <p>welcome to color change</p>
      <div>
         <button onClick={colorRed}>red</button>
         <button onClick={colorGreen}>green</button>
         <button onClick={colorYellow}>yellow</button>
         <button>voilet</button>
      </div>

    </div>
      
      
    
  )
}

export default App
