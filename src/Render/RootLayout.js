import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderCart from '../Component/Header/HeaderCart'

export default function RootLayout() {
  return (
    <>
    <HeaderCart/>
    <Outlet/>
    </>
  )
}
