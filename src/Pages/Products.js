import React, { useState } from 'react'
import img1 from "../Product Images/img-1.png";
import img2 from "../Product Images/img-2.png";
import frame1 from "../Product Images/frame-1.jpg";
import frame2 from "../Product Images/frame-3.jpg";
import charger from "../Product Images/charger.jpeg";
import battery1 from "../Product Images/16kmah-battery.jpeg";
import battery2 from "../Product Images/22kmah-battery.jpeg";
import "./css/Product.css"
import { Button, Card } from '@mui/material';

const Data = [
  {
    "name": "10L Drone",
    "price": "",
    "image1": img1,
    "image2": "",
    "image3": "",
    "category": "drone"
  },
  {
    "name": "16L Drone",
    "price": "",
    "image1": img2,
    "image2": "",
    "image3": "",
    "category": "drone"
  },
  {
    "name": "10L Frame",
    "price": "",
    "image1": frame1,
    "image2": "",
    "image3": "",
    "category": "frame"
  },
  {
    "name": "16L Frame",
    "price": "",
    "image1": frame2,
    "image2": "",
    "image3": "",
    "category": "frame"
  },
  {
    "name": "Drone Charger",
    "price": "",
    "image1": charger,
    "image2": "",
    "image3": "",
    "category": "charger"
  },
  {
    "name": "22000 maH Battery",
    "price": "",
    "image1": battery2,
    "image2": "",
    "image3": "",
    "category": "battery"
  },
  {
    "name": "16000 maH Battery",
    "price": "",
    "image1": battery1,
    "image2": "",
    "image3": "",
    "category": "battery"
  },
];

const categories = ['All', 'drone', 'frame', 'battery', 'charger'];

export default function Products() {


  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? Data
    : Data.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="category-filter">
        {categories.map((category) => (
          <Button
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="product-card">
            <div className="image-pro">
              <img src={product.image1} alt={product.name} />
            </div>
            <div className="pro-name">
              <h3>{product.name}</h3>
            </div>
            <div className="card-footer">
              <p>Price: ₹{product.price}</p>
              <Button variant='contained' color='error'>Add To Cart</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
