import photo from "../assets/NutriScore_transparent.png"
import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav">
          <a href="index.html"><img className="logo" src={photo}/></a>

          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__link">Home</a>
              </li>
              <li className="nav__item">
                <Link to="/Manual" className="nav__link">Manual</Link>
              </li>
              <li className="nav__item">
                <a href="https://www.iarc.who.int/wp-content/uploads/2021/09/IARC_Evidence_Summary_Brief_2.pdf" className="nav__link">Documentation</a>
              </li>
              <li className="nav__item">
                <Link to="Contact_me" className="nav__link">Contact Me</Link>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
