import React from "react";
import {Link } from "react-router-dom";

function Navbar(){
    return (
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>
  
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#stock">
                  Stock
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#resume">
                  Waiting List
                </a>
              </li>
  
              <li>
              <Link to={"./Login/LoginForm"} className="navbar-brand text-white">
                Login
             </Link>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
       
      );
}

    

export default Navbar;