import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import {GrSearch} from "react-icons/gr"
// import Search from "../searchComponent/Search";
function Header() {
  return (
    <Fragment>
      <div className="header">
        <div className="logo-container">
          <Link to="/" className="logo">
            MirazAli
          </Link>
        </div>
        <div className="action-container">
          <div className="home-container">
            <Link to="/" className="home">
              Home
            </Link>
          </div>

          <div className="about-container">
            <Link to="/About" className="about">
              About
            </Link>
          </div>
          <div className="contact-container">
            <Link to="/Contact" className="contact">
              Contact
            </Link>
          </div>
          <div className="project-container">
            <Link to="/Project" className="project">
              Project
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
