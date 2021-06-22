import React from "react";
import { NavLink } from "react-router-dom";
// import img1 from "./images/img-18.jpg";
const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={props.imgsrc} alt="card-img" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              adipisci. This is for fun.
            </p>
            <NavLink to="/contact" className="card-btn">
              Go Somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
