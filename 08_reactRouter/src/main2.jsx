import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { About, Contact, Home, User } from './components'
import './index.css'
import Layout from './Layout.jsx'


// creating a router
// Method 1:
// const router = createBrowserRouter([
//   {
//     path: '/', // Top level element and it'll render 
//     element: <Layout />,
//     // adding child elements
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       }
//     ]
//   }
// ])

// Method 2:
// Nested Routes
const router = createBrowserRouter(
  // it is a method for creating routes 
  createRoutesFromElements(
     // Configure nested routes with JSX
    // nesting is done here also 
    // 1st is the path and the 2nd is the element which we want to render
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route 
      // koi bi data fetch krna h from an API/database 
      // we can call direct API calls from the loader method only
      // Data Loading
      loader={githubInfoLoader} //called the method 
      path='github' 
      element={<Github />} 
      />
           {/* the param we take from the URL comes first here  */}
      <Route path='/user/:userid' element={<User />} />     
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* RouteProvider: is a self closing component */}
    {/* this takes a prop which is router */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
