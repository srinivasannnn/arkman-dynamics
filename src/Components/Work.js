import React from "react";
import frame1 from "../Product Images/frame-3.webp";
import frame2 from "../Product Images/frame-1.webp";
import Drone2 from "../Assets/blue drone.png";
import Drone3 from "../Assets/img-2.png";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Work = () => {
  const workInfoData = [
    {
      image: frame1,
      title: "16L Drone Frame",
      price: "59,999",
    },
    {
      image: frame2,
      title: "10L Drone Frame",
      price: "59,999",
    },
    {
      image: Drone2,
      title: "16L Drone",
      price: "2,99,999",
    },
    {
      image: Drone3,
      title: "10L Drone",
      price: "2,49,999",
    },
  ];

  const navigate = useNavigate();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Products</h1>
      </div>
      <div className="work-section-bottom">
        <Slider {...settings}>
          {workInfoData.map((product) => (
            <Card key={product.title} className="slider-card">
              <div className="slider-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="slider-title">
                <h2>{product.title}</h2>
              </div>
              <div className="slider-footer">
                <h4 className="slider-price">Price : ₹{product.price} </h4>
                <Button variant="contained" color="error" onClick={() => (navigate("/products"))}>Buy Now</Button>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
