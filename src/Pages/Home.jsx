import React from "react";
import HeroSlider from "../Component/Slider/HeroSlider";
import AboutSection from "../Component/About/AboutSection";
import DifferenceSection from "../Component/WhatMakeUSDiff/DifferenceSection";
import MenuSection from "../Component/MenuSection/MenuSection";
import SpecialEvents from "../Component/SpecialEvents/SpecialEvents";
import FollowUs from "../Component/FollowUs/FollowUs";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <DifferenceSection />
      <MenuSection />
      <SpecialEvents />
      <FollowUs />
      <Footer />
    </>
  );
};

export default Home;
