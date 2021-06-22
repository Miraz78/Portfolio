import React, { Fragment } from "react";
import Object from "./cardData/CardData";
function Card() {
  let project = Object;
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
