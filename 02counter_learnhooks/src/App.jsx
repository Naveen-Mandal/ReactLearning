import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  // let count = 15


  let [count, setCount] = useState(15)  //this is hook, useState is a function that returns an array with two elements, the first element is the current state value and the second element is a function that can be used to update the state value.
  //hook is used to change value or state of a component or variable everywhere it is used without loading/refreshing the page, it is used to manage state in a functional component.

  const addValue = () => {
    // count = count + 1
    // setCount(count)
    if(count+1 >20) return
    setCount(count + 1)
    console.log("button clicked: " + count)
  }

  const minusValue = () => {
    if(count - 1 < 0) return
    setCount(count - 1)
    console.log("button clicked: " + count)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button
        onClick={addValue}> add {count}
      </button>

      <br />

      <button
        onClick={minusValue}>minus {count}
      </button>
      <p>this is the value of count = {count}</p>

    </div>
  )
}

export default App
