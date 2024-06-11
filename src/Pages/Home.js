import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import MadeByRacers from "../Components/MadeByRacers";
import HoverVoitures from "../Components/HoverVoitures";
import Interieur from "../Components/Interieur";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <MadeByRacers />
      <HoverVoitures />
      <Interieur />
    </>
  );
};

export default Home;
