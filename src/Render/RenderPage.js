import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet }from 'react-router-dom'
import About from '../Pages/About'
import ProductItem from '../Component/Product/ProductItem'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import AuthForm from '../Pages/AuthForm'

const router= createBrowserRouter([
    { path:'/about', element:<About/>},
    { path:'/contact', element:<Contact/>},
    { path:'/productitem', element:<ProductItem/>},
    { path:'/login', element:<AuthForm/>},
    { path:'/', element:<Home/>},
  
])
export default function RenderPage() {
   
  return (
    <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
  )
}
