import './App.css'
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("white")
  // const changeColor =(e)=>{
  //  const body = document.querySelector("body")
  //   // console.dir(root)
  //   // console.dir(e);
  //   const color = e.currentTarget.innerText.toLowerCase();
  //   body.style.backgroundColor = color;
  //   console.log("color is: " + color);
  // }


  return (
    <>
      {/* <h1 className='bg-green-400'>hello how are you</h1> */}
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-3 py-2 rounded-xl">
             <button style={{backgroundColor : "blue"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("blue") }} >Blue</button>
          <button style={{backgroundColor : "green"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("green") }}>Green</button>
          <button style={{backgroundColor : "red"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("red") }} >Red</button>
          <button style={{backgroundColor : "yellow"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("yellow") }} >Yellow</button>
          <button style={{backgroundColor : "orange"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("orange") }} >Orange</button>
          <button style={{backgroundColor : "brown"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("brown") }}>Brown</button>
          <button style={{backgroundColor : "purple"}} className= "shadow-lg outline-none px-4 py-1 rounded-full text-white" onClick={() => { setColor("purple") }} >Purple</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
