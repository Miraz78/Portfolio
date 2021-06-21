import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <Fragment>
      <div className="About-container">
        <div className="about-sideBar-container">
          <div className="home-section">
            <Link to="/" className="home">
              Home
            </Link>
          </div>
          <div className="project-section">
            <Link className="project" to="/Project">
              Project
            </Link>
          </div>
          <div className="about-section">
            <Link className="about" to="/About">
              About
            </Link>
          </div>
        </div>

        <div className="about-main-container">
          <div className="heading">
            <h1 className="about-heading"> About Us</h1>
          </div>
          <div className="about-details">
            <p>
              Hello! My self Miraz Ali, I am from New Delhi . I Have Completed
              My 10th and 12th from CBSE Board , I had Completed My Graducation
              in B.Tech (Electronic communication Engeenering) From Maharishi
              Dayanand University. <br/>After that I join Newton School for Full
              Stack Developer Bootcamp.
            </p>
          </div>
          <div className="sub-details">
            <h2>Frontend Developer</h2>
          </div>
          <div className="all-skill-container">
            Full Stack Web Development along with Problem Solving.
            <br />
            Technical Stack Learned: Java, Data Structure
            Algorithm, HTML-5, CSS, Javascript and React.
            <br />
            Participated in various Coding Contest
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
