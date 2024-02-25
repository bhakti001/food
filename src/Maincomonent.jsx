import React from 'react'
import Navbar3 from './Components/Nav-3/Navbar'
import { Outlet } from 'react-router-dom'
import Footer1 from './Footer/Footer1'

function Maincomonent() {
  return (
    <>
        <Navbar3/>
        <Outlet/>
        <Footer1/>
    </>
  )
}

export default Maincomonent