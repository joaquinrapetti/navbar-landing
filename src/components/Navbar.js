import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // state for hamburguer menu initialize false
  const [click, setClick] = useState(false);

  // function to handle change between hamburguer menu and clasic menu
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
