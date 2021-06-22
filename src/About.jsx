import React from "react";
import img2 from "../src/images/img2.svg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={img2}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
