import { useEffect, useCallback, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = () => {
    let str = "";
    let sr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) sr += "1234567890";
    if (charactersAllowed) sr += "{}[]()`~!@#$%^&*><?/:;+=-_";
    for (let i = 0; i < length; i++) {
      const r = Math.floor(Math.random() * sr.length + 1);
      str += sr.charAt(r);
    }
    setPassword(str);
  }
  const passGenerator = useCallback(passwordGenerator, [length, numbersAllowed, charactersAllowed, setPassword]);

  

  //setPassword is used as dependency in useCallbace() hook because it is for optimization. if we don't use it will still work
  //if we use password in place of setPassword then infinite loop will run because password changes whenever setPassword is called, which recreates the callback again and again


  //this password generator will be called when numbersAllowed || charactersAllowed will be selected or unselected. So we have to call password generator whenever numbersAllowed || charactersAllowed will be checked or unchecked thats why using useCallback() hook.

  //useCallback() not stops re-render. It only remembers/memorize the function and reuse it. using useCallback() prevents from creating functions everytime it is called. 

  useEffect(() => { passwordGenerator() }, [length, numbersAllowed, charactersAllowed, passGenerator]);
  //we are using useEffect() hoot because we want to rerun whenever any variable is changed.


  const passwordRef = useRef(null)  //we have to pass initial value. Here we are passing null.
  //on input(password) we will set attribute ref = {passwordRef}.
  //Used to select the text which is copied.
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.select().setSelectionRange(0,3);

    window.navigator.clipboard.writeText(password);    //we can use window in react directly. we can't use it in node.js because in node.js there is server side rendering.

    //writeText means write text in clipboard to copy.
  }, [password]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center text-xl my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3 "
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='numberInput' defaultChecked={numbersAllowed} onChange={() => { setNumbersAllowed((prevNumAllowed) => !prevNumAllowed) }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='characterInput' defaultChecked={charactersAllowed} onChange={() => { setCharactersAllowed((prevCharAllowed) => !prevCharAllowed) }} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
