import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet }from 'react-router-dom'
// import Home from '../Pages/Home'
import About from '../Pages/About'
import History from '../Pages/History'
import ProductItem from '../Component/Product/ProductItem'

const router= createBrowserRouter([
    { path:'/about', element:<About/>},
    { path:'/history', element:<History/>},
    { path:'/productitem', element:<ProductItem/>},
  
])
export default function RenderPage(props) {
   
  return (
    <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
  )
}
