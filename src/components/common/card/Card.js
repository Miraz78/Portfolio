import React, { Fragment } from "react";
import portfolio from "./portfolio/portfolio  image 2.jpg";
import birthday from "./birthday-image/BirthdayReminder image.jpg";
import quiz from "./quiz-image/portfolio  image 2.jpg";

function Card() {
  let project = [
    {
      image: portfolio,
      heading: "Portfolio",
      detail: "Features:Home page, About page, Project page",
      subDetail: "Tech Stack:React.Js,SCSS,CSS",
    },
    {
      image: birthday,
      heading: "Birthday Reminder",
      detail: "Features:Home page",
      subDetail: "Tech Stack:React.Js,CSS",
    },
    {
      image: quiz,
      heading: "Quiz App",
      detail: "Features:Home page",
      subDetail: "Tech Stack:React.JS,CSS",
    },
  ];
  return (
    <Fragment>
      {project.map((value) => (
        <div className="container">
          <div className="project-image-container">
            <img src={value.image} alt="image not found" />
          </div>
          <div className="detail-container">
            <div className="heading">
              <h3>{value.heading}</h3>
            </div>
            <div className="detail">
              <h5>{value.detail}</h5>
            </div>
            <div className="subdetail">
              <h5>{value.subDetail}</h5>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
export default Card;
