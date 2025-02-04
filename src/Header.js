import React, { useState } from "react";
import logo from "./image/logo-black.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-4 fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} style={{ width: "100px" }} alt="logo" />
        </NavLink>

        {/* Toggle Button */}
        <button
          className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="collapsibleNavId"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="collapsibleNavId"
        >
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeNavbar}>
                OUR WORK
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses" onClick={closeNavbar}>
                INDUSTRY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hire" onClick={closeNavbar}>
                HIRE TEAM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
