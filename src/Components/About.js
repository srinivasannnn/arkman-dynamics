import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/img-2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Drone Is An Important Part Of A Morden Agriculture
        </h1>
        <p className="primary-text">
          We are a leading provider in the agricultural drone industry. With a strong focus on innovation and sustainability, we specialize in offering state-of-the-art 10L agriculture pesticide spraying drones, along with comprehensive sales, servicing, and spare parts support.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={() => { navigate("/aboutus") }}>Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
