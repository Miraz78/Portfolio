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
          <h3 className="sub-heading">Full Stack Web Developer</h3>
          <p className="paragraph">
            Full Stack Web Development along with Problem Solving. Technical
            Stack Learned: Java, Data Structure Algorithm, HTML-5, CSS,
            Javascript and React. Participated in various Coding Contest
            Organised by the Platform.
          </p>
        </div>
        <div className="img-container">
          <img className="profile-image" src={image} alt="image not found" />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
