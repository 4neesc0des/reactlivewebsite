import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-title">
          <p className="logo">@nishKuar</p>
        </div>
        <div className="nav-toggle">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="nav-items-container">
          <ul className="nav-items">
            <li>
              <NavLink activeClassName="active-class" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-class" to="/service">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-class" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-class" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
