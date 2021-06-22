import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="header-container">
          <div className="row">
            <div className="item-left">
              <div className="item-material">
                <h1 className="heading">
                  {props.name} <strong>AnishKuar</strong>
                </h1>
                <h2 className="subHeading">
                  We are the team of talented devloper making websites.
                </h2>
                <div className="heading-button">
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="item-right">
              <img src={props.imgsrc} className="img" alt="home-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
