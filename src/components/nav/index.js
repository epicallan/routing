import React from "react";
import {Route} from "react-router-dom";

import {FaAlignJustify} from 'react-icons/fa';
import "./nav.css";

const Navlayout = class extends React.Component {
 
  componentDidMount(){
    function classToggle() {
      const navs = document.querySelectorAll('.Navbar__Items')
      
      navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }
    document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
  }

 render() {
   return (
  
  <div className="Navbar fixed-top">
    <div className="Navbar__Link Navbar__Link-brand">
      <Route className="navbar-brand" path="/"  activestyle={{ color: "black" }} title="bettinah">
          BETTINAH TIANAH
      </Route>
    </div>
    <div
      className={`Navbar__Link Navbar__Link-toggle`} 
    >
      <FaAlignJustify  />
    </div>
    <nav
      id="navMenu"
      className={`Navbar__Items Navbar__Items--right `}
    >
      <div className="Navbar__Link">
        <a className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activestyle={{ color: "black" }}  href="/about">
          ABOUT ME
        </a>
      </div>
      <div className="Navbar__Link">
        <a className="nav-link navigation__navlinks"  onClick={this.closeNavbar}  activestyle={{ color: "black" }} href="/news">
          BETTINAHTIANAH NEWS
        </a>
      </div>
    </nav>
  </div>
  )}
}

export default Navlayout;
