import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet }from 'react-router-dom'
import About from '../Pages/About'
import ProductItem from '../Component/Product/ProductItem'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import AuthForm from '../Pages/AuthForm'
import ProductItem2 from '../Component/Product/ProducItem2'
import ProductItem3 from '../Component/Product/ProductItem3'
import ProductItem4 from '../Component/Product/ProductItem3'
import Privacy from '../Pages/Privacy'
import Terms from '../Pages/Terms'

const router= createBrowserRouter([
    { path:'/about', element:<About/>},
    { path:'/contact', element:<Contact/>},
    { path:'/productitem', element:<ProductItem/>},
    { path:'/login', element:<AuthForm/>},
    { path:'/Ecommerce-Website-using-React', element:<Home/>},
    { path:'/womensclothing', element:<ProductItem2/>},
    { path:'/kidsclothing', element:<ProductItem3/>},
    { path:'/shoes', element:<ProductItem4/>},
    { path:'/accessories', element:<ProductItem4/>},
    { path:'/privacy', element:<Privacy/>},
    { path:'/terms', element:<Terms/>},
  
])
export default function RenderPage() {
   
  return (
    <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
  )
}
