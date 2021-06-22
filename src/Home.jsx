import React from "react";
import img1 from "../src/images/img1.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={img1}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
