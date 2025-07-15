import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <Link to="/admin/users">Users</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/orders">Orders</Link>

      <Outlet />
      {/* This Outlet will render the nested routes */}
      
        

    </div>
  )
}
