import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './Profile.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


const router= createBrowserRouter([{
//giving the pages
path:"/",
element:<App/>,
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
