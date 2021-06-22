import React from "react";
// import img1 from "./images/img-18.jpg";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-headding-container">
          <h1 className="service-headding">Our Services</h1>
        </div>
        <div className="service-content">
          <div className="rows-container">
            {Sdata.map((value, index) => {
              return (
                <Card key={index} imgsrc={value.imgsrc} title={value.title} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
