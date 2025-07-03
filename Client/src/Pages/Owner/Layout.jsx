import React from 'react'
import NavbarOwner from '../../Components/Owner/NavbarOwner'
import Sidebar from '../../Components/Owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <NavbarOwner/>
        <div className='flex'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout