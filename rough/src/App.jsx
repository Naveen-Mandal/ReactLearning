import { useState, useEffect } from 'react'

import './App.css'
import { useCallback } from 'react';

function App() {

  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength ] = useState(8);

  const passGenerator = ()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "1234567890";
    if(charAllowed) str+="{}()[]!@#$%^&*=+";
    let p = "";
    for(let i= 0; i<length; i++){
      const idx = Math.floor(Math.random()*(str.length));
      p+=str.charAt(idx);
    }
    setPassword(p);
  }
  const callback = useCallback(passGenerator, [length, numberAllowed, charAllowed, setPassword])
  const refresh = useEffect(passGenerator, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div>
        <div>
          <h1>Password Generator</h1>
          <div>
            <input type="text"
              readOnly
              placeholder='Password'
              value={password}
            />
            <br />
            <input type="range" min={6} max={100} value={length}  onChange={(e)=>{ setLength(e.target.value)}}/>
            <label >Length: {length}</label>
            <input type="checkbox" defaultChecked ={numberAllowed} onClick={()=>{setNumberAllowed(prev => !prev)}} />
            <input type="checkbox" defaultChecked ={charAllowed} onClick={()=>{setCharAllowed(prev => !prev)}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
