import React, { Fragment } from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import image from "./profile-image/profile.png";
function Home() {
  return (
    <Fragment>
      <Header />
      <div className="main-container">
        <div className="info-container">
          <h3 className="intro">Hello!</h3>
          <h1 className="name">I'm Miraz Ali</h1>
          <h3 className="sub-heading">
            Full Stack Web Developer
          </h3>
          <p className="paragraph">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in C/O https://placeholder.com/text/lorem-ipsum/
          </p>
        </div>
        <div className="img-container">
            <img className="profile-image" src={image} alt="image not found"/>
        </div>
      </div>
    <Footer/>
    </Fragment>
  );
}

export default Home;
