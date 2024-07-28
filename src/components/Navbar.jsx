import { useState } from "react";
import photo from "../assets/NutriScore_transparent.png"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
function Navbar(){
    return(
        <>
        <nav className="navbar">
        <a href="index.html"><img src={photo} className="logo" /></a>
            <ul className="list">
                   <li><a href="index.html">Home</a></li>
                   <li>Manual</li>
                   <li><a href="https://www.iarc.who.int/wp-content/uploads/2021/09/IARC_Evidence_Summary_Brief_2.pdf" >Documentation</a></li>
                   <li>Suggestions</li>
                <li>About us</li>
            </ul>
                <div className="line">
                    <img src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-4.jpg" width="70px" height="70px"/>
                    {/* <button><FaBars/></button> */}
                <ul className="option">
                <li><a href="index.html">Home</a></li>
                   <li>Manual</li>
                   <li><a href="https://www.iarc.who.int/wp-content/uploads/2021/09/IARC_Evidence_Summary_Brief_2.pdf" >Documentation</a></li>
                   <li>Suggestions</li>
                <li>About us</li>
                    </ul>
                    </div>
        </nav>
        </>
    )
}
export default Navbar