import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const changeColor =(e)=>{
   const body = document.querySelector("body")
    // console.dir(root)
    console.dir(e);
    const color = e.target.innerText.toLowerCase();
    body.style.backgroundColor = color;
  }
  return (
    <>
     {/* <h1 className='bg-green-400'>hello how are you</h1> */}

     <button onClick={changeColor} className='bg-blue-400'>Blue</button>
     <button onClick={changeColor} className='bg-green-400'>Green</button>
     <button onClick={changeColor} className='bg-red-400'>Red</button>
     <button onClick={changeColor} className='bg-yellow-400'>Yellow</button>
     <button onClick={changeColor} className='bg-orange-400'>Orange</button>
     <button onClick={changeColor} className='bg-amber-400'>Brown</button>
     <button onClick={changeColor} className='bg-purple-400'>Purple</button>

    </>
  )
}

export default App
