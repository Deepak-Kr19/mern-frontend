import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Link to="/admin">Users</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
