import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet }from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

const router= createBrowserRouter([
    { path:'/about', element:<About/>},
  
])
export default function RenderPage(props) {
   
  return (
    <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
  )
}
