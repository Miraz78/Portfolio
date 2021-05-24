import React, { Fragment } from "react";
import {GrSearch} from "react-icons/gr"
import Search from "../searchComponent/Search";
function Header() {
  return (
    <Fragment>
      <div className="header">
        <div className="logo-container">
         <h2 className="logo">Portfolio</h2>
        </div>
        <div className="action-container">
          <div className="home">
            <h3>Home</h3>
          </div>
          <div className="about">
            <h3>About</h3>
          </div>
          <div className="contact">
            <h3>Contact</h3>
          </div>
          <div className="project">
            <h3>Project</h3>
          </div>
        </div>
        <Search/>
      </div>
    </Fragment>
  );
}

export default Header;
