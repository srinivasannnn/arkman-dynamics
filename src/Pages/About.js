import React from 'react'
import "./css/About.css";
import drone from "../Assets/blue drone.png"
export default function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          We are a leading provider in the agricultural drone industry. With a strong focus on innovation and sustainability, we specialize in offering state-of-the-art 10L agriculture pesticide spraying drones, along with comprehensive sales, servicing, and spare parts support.
          <br /><br />
          we understand the critical role that technology plays in modern agriculture. Our advanced 10L pesticide spraying drones are designed to revolutionize the way crops are cared for, ensuring efficient and precise application of pesticides. By harnessing the power of drone technology, we aim to enhance crop yield, minimize environmental impact, and optimize resource utilization.
          <br /><br />
          Our commitment goes beyond just providing products; we pride ourselves on offering exceptional customer service and reliable maintenance support. Our team of skilled technicians is dedicated to keeping your drones in peak condition, ensuring uninterrupted operations during crucial spraying seasons.
          <br /><br />
          With a wide range of high-quality spare parts available, we make it easy for you to keep your fleet operational and maximize your investment. Our goal is to empower farmers and agriculture professionals with cutting-edge tools that drive productivity and sustainability.
        </p>
      </div>
      <div className="about-image">
        <img
          src={drone}
          alt="About Us"
          className="about-image"
        />
      </div>
    </div>
  );
}

