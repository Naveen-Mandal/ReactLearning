import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let value = 15;
  let [value, setCount] = useState(15)
  function addOne(){
    // value++;
    // setCount(value + 1)
    // setCount(value + 1)
    // setCount(value + 1)
    // setCount(value + 1)        //value will not increase 4 times. value will increase only increase one time. Because all are same tasks so in will go in batches and value will increase only one time.

    setCount((prevCount) => prevCount +1)         // setCount((count) => count +1)   any name can be used
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)    //now value will increase 4 times.

    console.log(value);
  }
  function minusOne(){
    value--;
    setCount(value)

  }

  return (
    <>
        <h1>{value}</h1>
        <button onClick={addOne}>add</button>    
        <br />
        <button onClick={minusOne}>minus</button>    
    </>
  )
}

export default App
