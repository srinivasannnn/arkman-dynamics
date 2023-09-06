import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/blue drone.png";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Revolutionize Your Farming: Harness the Power of Agriculture Drones
          </h1>
          <p className="primary-text">
          Agriculture drones offer farmers a powerful tool to improve their operational efficiency. They can cover large areas of farmland quickly and accurately, helping farmers save time and labor. Drones equipped with advanced sensors and cameras can collect data in real-time, allowing farmers to make informed decisions promptly.
          </p>
          <button className="secondary-button" onClick={()=>{navigate("/products")}}>
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About />
      <Work />
      <Testimonial />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
