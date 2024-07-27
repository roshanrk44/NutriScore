import { useState } from "react";
import photo from "../assets/NutriScore_transparent.png"
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
        </nav>
        </>
    )
}
export default Navbar