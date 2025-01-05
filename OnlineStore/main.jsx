import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Routes } from "react-router"
import Bag from "./src/Components/Bag.jsx"
import App from './src/routes/App.jsx'
import Home from "./src/routes/Home.jsx"
// import Bag from ".Bag.jsx"
// import App from '.App.jsx'


const router = createBrowserRouter([
  
  {
  path:"/",
  element: <App></App>,
  children:[
    {
      path:"/",
      element:<Home/>
  
    },
    {
    path:"/bag",
    element:<Bag></Bag>

  },
 ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
