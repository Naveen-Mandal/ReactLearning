import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { gitHubInfoLoader } from './components/github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>,

//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }

//     ]
//   }
// ])

//Another way to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/user/:userid' element = {<User/>}/>
      {/* <Route path = '/github/:username' element = {<Github/>}/> */}
      {/* <Route index element = {<Github username = "Naveen-Mandal"/>}/>
      <Route path=':username' element = {<Github/>} /> */}
      <Route
      // we can also use loader to fetch data before rendering the component
      // we can call api from here and pass the data to the component as props
      //loader will call the api when cursor is on the github in header and will kept in cache and when we click on the github link it will render the component with the data from the cache without calling the api again
      loader = {gitHubInfoLoader}
       path = '/github' 
       element = {<Github/>}
       />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>,
)
