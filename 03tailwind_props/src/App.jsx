import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
 let obj = {
  name : "Naveen",
  age :16
 }
 const arr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 p-4 rounded-xl mb-4'>tailwind test</h1>
     {/* <Cards channel = "Naveen Gangster" newObject = {obj} newArray = {arr}/>    */}

     <Cards username = "Naveen Gangster" buttonText="click me"/>    
    {/* we can assign key value pairs using props. */}
    <Cards username= "Mandal Gangster"  buttonText="Visit me"/>
    </>
   
   
  );
}



export default App
