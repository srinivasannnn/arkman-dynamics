// AddToCart.js
import React, { useState } from 'react';

const AddToCart = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="add-to-cart">
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        className="quantity-input"
      />
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;

