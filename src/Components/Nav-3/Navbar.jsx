
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars,   FaTimes } from "react-icons/fa";
import './Navbar.css'
function Navbar3() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar header">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="restaurant-logo.png"  alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "") } onClick={closeMobileMenu} >
                Home
              </NavLink>
            </li><li className="nav-item">
              <NavLink to="/menu"
               className={({ isActive }) =>"nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>Menu
              </NavLink>
            </li>
            <li className="nav-item"  >
                <NavLink to="/about"            
                  className={({ isActive }) =>  "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>About
                </NavLink>
            </li>
            
        
            <li className="nav-item">
              <NavLink to="/contact"
                className={({ isActive }) =>"nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar3;
