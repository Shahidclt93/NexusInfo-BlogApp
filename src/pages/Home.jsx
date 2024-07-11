import React from "react";
import Posts from "../components/Posts";
import Hero from "../components/Hero";
import Weather from "../components/weather/Weather";
import TopHero from "../components/TopHero";
import WeatherMobile from "../components/weather/WeatherMobile ";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
    <ScrollToTop/>
      <TopHero />
      <WeatherMobile/>
      <div className="container" style={{ display: "flex" }}>
        <div>
          <Hero />
          <Posts />
        </div>
        <Weather />
      </div>
    </>
  );
};

export default Home;
