import React from "react";
import { Link } from "react-router-dom";
import Arif from "../images/Arif.jpg";
import "../css/navbar.css";
import { FaBars } from "react-icons/fa";

var Navbar = () => {
  return (
    <nav className="navbar">
      <div className="image">
        <div><img src={Arif} alt="Arif" /></div>
        <div><Link to="/"> Arif Fakorizada </Link></div>
      </div>
      <div className="menu_button">
        <FaBars
          style={{
            height: "30px",
            width: "auto",
          }}
        />
      </div>
      <div className="navbar_buttons">

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/myworks">My Works </Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
