import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'
import Hello from './Hello.jsx'


function MyApp() {
  return (
    <h1>Hello this is MyApp finction inside main.jsx</h1>
  )
}

const MyElement = (
  <a href="https://google.com" target='_blank'>Vist google by clicking me</a>
)

const anotherUser = "Hello this is another user"
const reactElement = React.createElement(
  'a',  //this is element type
  { href: 'https://google.com', target: '_blank' },   //this is attributes of that element
  'Visit Google by clicking me',    //this is children of that element or content of that element
  anotherUser    //this is evaluated expression as children of that element or content of that element
)
createRoot(document.getElementById('root')).render(

  // MyApp()
  // <MyApp />
  // MyElement
  reactElement
)
