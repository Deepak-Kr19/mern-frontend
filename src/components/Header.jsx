import "./Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <div className="header-container">
      <div className="header-title">MERN Frontend</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">MyCart</Link>
        <Link to="/order">MyOrder</Link>
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
