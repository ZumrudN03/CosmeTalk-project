import React from 'react'
import AdminNav from '../AdminNav'
import { Outlet } from 'react-router-dom'
import "./index.scss"

function AdminLayout() {
  return (
    <div className='adminLayout'>
        <AdminNav/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout