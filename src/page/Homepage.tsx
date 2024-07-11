import React from "react";
import HomeImagebox from "../component/HomeImagebox";
import Banner from "../component/Banner";
import Feature from "../component/Feature";
import Content from "../component/Content";
import Location from "../component/Location";
import Building from "../component/Building";
import Prism from "../component/Prism";

const Homepage = () => {
  return (
    <>
      <HomeImagebox />
      <Banner />
      <Feature />
      <Content />
      <Location />
      <Building />
      <Prism />
    </>
  );
};

export default Homepage;
