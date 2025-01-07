import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode} from 'react'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bag from "./src/Components/Bag.jsx"
import App from './src/routes/App.jsx'
import Home from "./src/routes/Home.jsx"
import { Provider } from "react-redux";
import myStore from "./src/Store/index.js";


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
    <Provider store={myStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
