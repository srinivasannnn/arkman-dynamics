import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/spec.webp";

const Testimonial = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container spec-image">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading bene">
          Specifications
        </h1>
        <div className="list bene">
          <table>
            <tr>
              <th>
                Spray Capacity
              </th>
              <td>16L</td>
            </tr>
            <tr>
              <th>
                Flight Time
              </th>
              <td>Upto 25 min (With Lithium Ion), Upto 20 min (With Lipo)</td>
            </tr>
            <tr>
              <th>
                Range
              </th>
              <td>3000m</td>
            </tr>
            <tr>
              <th>
                Speed
              </th>
              <td>0-10m/s</td>
            </tr>
            <tr>
              <th>
                Flow Rate
              </th>
              <td>1.2-2L/min</td>
            </tr>
            <tr>
              <th>
                Spray Width
              </th>
              <td>5-7m</td>
            </tr>
            <tr>
              <th>
                Total Weight
              </th>
              <td>42kg</td>
            </tr>
          </table>
        </div>
        <h1 className="primary-heading bene">
          Benefits of 16L Agriculture Hexacopter Drone System
        </h1>
        <div className="list bene">
          <table>
            <tr>
              <th>
                Stability
              </th>
              <td>Highly Stable system and designed to operate in very harsh conditions</td>
            </tr>
            <tr>
              <th>
                Optimized design
              </th>
              <td>Vehicle has been designed from ground up and optimized part by part for maximum efficiencies.</td>
            </tr>
            <tr>
              <th>
                Flight Time
              </th>
              <td>Higher Flight time better than other vehicles in this class</td>
            </tr>
            <tr>
              <th>
                Fully Customizable
              </th>
              <td>The system is designed keeping mind, various applications that it could be used for. Hence customizable for wide range of applications</td>
            </tr>
            <tr>
              <th>
                Quality
              </th>
              <td>Fabricated with high-end carbon fiber components and high quality avionics, the system is extremely reliable</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  );
};

export default Testimonial;
